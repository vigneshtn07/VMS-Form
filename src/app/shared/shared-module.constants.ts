import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TextMaskModule } from 'angular2-text-mask';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VMSDialogModalComponent } from './components/vms-dialog-modal/vms-dialog-modal.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NumberDirective } from './directives/only-number.directive'

export abstract class SharedModuleConstants {
    static readonly MODULE_IMPORTS = [
        CommonModule,
        ModalModule.forRoot(),
        TextMaskModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        BrowserAnimationsModule,
        NgMultiSelectDropDownModule.forRoot()
    ];
    static readonly MODULE_EXPORTS = [
        CommonModule,
        TextMaskModule,
        VMSDialogModalComponent,
        FormsModule,
        BsDatepickerModule,
        BrowserAnimationsModule,
        NgMultiSelectDropDownModule,
        NumberDirective
    ];
    static readonly MODULE_DECLARATIONS = [
        VMSDialogModalComponent,
        NumberDirective
    ];
    static readonly MODULE_PROVIDERS = [];
}
