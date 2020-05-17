import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgiveness',
  templateUrl: './forgiveness.component.html',
  styleUrls: ['./forgiveness.component.css']
})
export class ForgivenessComponent implements OnInit {

  applicationInformationFlag: boolean = true;
  forgivenessQuestionsFlag: boolean = false;
  forgivenessAmountFlag: boolean = false;
  documentUploadFlag: boolean = false;
  reviewAndTermsFlag: boolean = false;

  applicationInformationForm: FormGroup;
  forgivenessQuestionsForm: FormGroup;
  forgivenessAmountForm: FormGroup;
  documentUploadForm: FormGroup;
  reviewAndTermsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.applicationInformationForm = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.forgivenessQuestionsForm = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.forgivenessAmountForm = new FormGroup({
      payrollCosts: new FormControl('', [
        Validators.required
      ]),
      coveredMortgageInterest: new FormControl('', [
        Validators.required,
      ])//,
      // coveredRent: new FormControl('', [
      //   Validators.required
      // ]),
      // coveredUtilities: new FormControl('', [
      //   Validators.required
      // ]),
      // emergencyEIDLGrant: new FormControl('', [
      //   Validators.required
      // ]),
      // nonForgivenessExpenses: new FormControl('', [
      //   Validators.required
      // ])
    });
    this.documentUploadForm = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.reviewAndTermsForm = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  highlightApplicationInformation() {
    this.applicationInformationFlag = true;
    this.forgivenessQuestionsFlag = false;
    this.forgivenessAmountFlag = false;
    this.documentUploadFlag = false;
    this.reviewAndTermsFlag = false;
  }
  highlightForgivenessQuestions() {
    this.forgivenessQuestionsFlag = true;
    this.forgivenessAmountFlag = false;
    this.documentUploadFlag = false;
    this.reviewAndTermsFlag = false;
  }
  highlightForgivenessAmount() {
    this.forgivenessAmountFlag = true;
    this.documentUploadFlag = false;
    this.reviewAndTermsFlag = false;
  }
  highlightDocumentUpload() {
    this.documentUploadFlag = true;
    this.reviewAndTermsFlag = false;
  }
  highlightReviewAndTerms() {
    this.reviewAndTermsFlag = true;
  }
}
