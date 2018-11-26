/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../spinner/spinner-component.ngfactory";
import * as i2 from "../spinner/spinner-component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "./note.component";
import * as i6 from "../../services/notes-api/notes-api.service";
import * as i7 from "../../services/notes-data/notes-data.service";
var styles_NoteComponent = [];
var RenderType_NoteComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_NoteComponent, data: {} });
export { RenderType_NoteComponent as RenderType_NoteComponent };
function View_NoteComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "loading-overlay"]], null, null, null, null, null))], null, null); }
function View_NoteComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["\n                            Created ", "\n                        "])), i0.ɵppd(2, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 1, 0, _ck(_v, 2, 0, i0.ɵnov(_v.parent, 0), (((_co.note == null) ? null : _co.note.timestamp) * 1000), "short")); _ck(_v, 1, 0, currVal_0); }); }
function View_NoteComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["role", "alert"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵted(1, null, ["\n                    ", "\n                "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "alert alert-", _co.alert.type, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.alert.message; _ck(_v, 1, 0, currVal_1); }); }
function View_NoteComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(2, 0, null, null, 7, "div", [["class", "div-loading"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(4, 0, null, null, 4, "div", [["class", "spinner-container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                            "])), (_l()(), i0.ɵeld(6, 0, null, null, 1, "spinner", [], null, null, null, i1.View_SpinnerComponent_0, i1.RenderType_SpinnerComponent)), i0.ɵdid(7, 114688, null, 0, i2.SpinnerComponent, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, null, ["\n                "]))], function (_ck, _v) { _ck(_v, 7, 0); }, null); }
function View_NoteComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "form-validation-alert soft-alert"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Please type in a note."]))], null, null); }
export function View_NoteComponent_0(_l) { return i0.ɵvid(0, [i0.ɵpid(0, i3.DatePipe, [i0.LOCALE_ID]), i0.ɵqud(402653184, 1, { vcInput: 0 }), (_l()(), i0.ɵeld(2, 0, null, null, 106, "div", [["class", "note-modal page-modal"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(4, 0, null, null, 103, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(6, 0, null, null, 100, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_1)), i0.ɵdid(9, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(11, 0, null, null, 94, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(13, 0, null, null, 15, "div", [["class", "note-actions flex-space"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(15, 0, null, null, 4, "span", [["class", "note-meta"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_2)), i0.ɵdid(18, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(21, 0, null, null, 6, "span", [["class", "page-modal-button"], ["id", "page-modal-close"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCloseNoteModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(23, 0, null, null, 0, "i", [["class", "fas fa-times"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(25, 0, null, null, 1, "span", [["class", "key-label"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Esc"])), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_3)), i0.ɵdid(31, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_4)), i0.ɵdid(34, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(36, 0, null, null, 68, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i0.ɵnov(_v, 38).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i0.ɵnov(_v, 38).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(37, 16384, null, 0, i4.ɵbf, [], null, null), i0.ɵdid(38, 540672, null, 0, i4.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i0.ɵprd(2048, null, i4.ControlContainer, null, [i4.FormGroupDirective]), i0.ɵdid(40, 16384, null, 0, i4.NgControlStatusGroup, [i4.ControlContainer], null, null), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(42, 0, null, null, 13, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(44, 0, null, null, 10, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                            "])), (_l()(), i0.ɵeld(46, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fas fa-thumbtack small pin"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                            "])), (_l()(), i0.ɵeld(48, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "title"], ["id", "title"], ["name", "title"], ["type", "text"]], [[8, "placeholder", 0], [8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 49)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 49).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 49)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 49)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(49, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(51, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [2, i4.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(53, 16384, null, 0, i4.NgControlStatus, [i4.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(57, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(59, 0, [[1, 0], ["focus", 1]], null, 5, "textarea", [["class", "form-control"], ["cols", "30"], ["formControlName", "content"], ["id", "content"], ["name", "content"], ["placeholder", "Take a note..."], ["rows", "4"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 60)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 60).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 60)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 60)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(60, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(62, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [2, i4.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(64, 16384, null, 0, i4.NgControlStatus, [i4.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n                        \n                    "])), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(67, 0, null, null, 5, "input", [["formControlName", "cat"], ["id", "cat"], ["name", "cat"], ["type", "hidden"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 68)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 68).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 68)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 68)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(68, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(70, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [2, i4.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(72, 16384, null, 0, i4.NgControlStatus, [i4.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(74, 0, null, null, 5, "input", [["formControlName", "timestamp"], ["id", "timestamp"], ["name", "timestamp"], ["type", "hidden"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 75)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 75).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 75)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 75)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(75, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(77, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [2, i4.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(79, 16384, null, 0, i4.NgControlStatus, [i4.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(81, 0, null, null, 5, "input", [["formControlName", "note_id"], ["id", "note_id"], ["name", "note_id"], ["type", "hidden"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 82)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 82).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 82)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 82)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(82, 16384, null, 0, i4.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i0.ɵdid(84, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [2, i4.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i0.ɵdid(86, 16384, null, 0, i4.NgControlStatus, [i4.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(88, 0, null, null, 15, "div", [["class", "form-group flex-space"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(90, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NoteComponent_5)), i0.ɵdid(93, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(96, 0, null, null, 6, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                            "])), (_l()(), i0.ɵeld(98, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fas fa-edit"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                            "])), (_l()(), i0.ɵeld(100, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Save Note"])), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoading; _ck(_v, 9, 0, currVal_0); var currVal_1 = ((_co.note == null) ? null : _co.note.timestamp); _ck(_v, 18, 0, currVal_1); var currVal_2 = _co.alert.message; _ck(_v, 31, 0, currVal_2); var currVal_3 = _co.isLoading; _ck(_v, 34, 0, currVal_3); var currVal_11 = _co.noteForm; _ck(_v, 38, 0, currVal_11); var currVal_21 = "title"; _ck(_v, 51, 0, currVal_21); var currVal_30 = "content"; _ck(_v, 62, 0, currVal_30); var currVal_39 = "cat"; _ck(_v, 70, 0, currVal_39); var currVal_48 = "timestamp"; _ck(_v, 77, 0, currVal_48); var currVal_57 = "note_id"; _ck(_v, 84, 0, currVal_57); var currVal_58 = (_co.noteForm.controls["content"].touched && !_co.noteForm.controls["content"].valid); _ck(_v, 93, 0, currVal_58); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = i0.ɵnov(_v, 40).ngClassUntouched; var currVal_5 = i0.ɵnov(_v, 40).ngClassTouched; var currVal_6 = i0.ɵnov(_v, 40).ngClassPristine; var currVal_7 = i0.ɵnov(_v, 40).ngClassDirty; var currVal_8 = i0.ɵnov(_v, 40).ngClassValid; var currVal_9 = i0.ɵnov(_v, 40).ngClassInvalid; var currVal_10 = i0.ɵnov(_v, 40).ngClassPending; _ck(_v, 36, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_12 = i0.ɵinlineInterpolate(1, "", _co.defaultTitle, ""); var currVal_13 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.title), ""); var currVal_14 = i0.ɵnov(_v, 53).ngClassUntouched; var currVal_15 = i0.ɵnov(_v, 53).ngClassTouched; var currVal_16 = i0.ɵnov(_v, 53).ngClassPristine; var currVal_17 = i0.ɵnov(_v, 53).ngClassDirty; var currVal_18 = i0.ɵnov(_v, 53).ngClassValid; var currVal_19 = i0.ɵnov(_v, 53).ngClassInvalid; var currVal_20 = i0.ɵnov(_v, 53).ngClassPending; _ck(_v, 48, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_22 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.content), ""); var currVal_23 = i0.ɵnov(_v, 64).ngClassUntouched; var currVal_24 = i0.ɵnov(_v, 64).ngClassTouched; var currVal_25 = i0.ɵnov(_v, 64).ngClassPristine; var currVal_26 = i0.ɵnov(_v, 64).ngClassDirty; var currVal_27 = i0.ɵnov(_v, 64).ngClassValid; var currVal_28 = i0.ɵnov(_v, 64).ngClassInvalid; var currVal_29 = i0.ɵnov(_v, 64).ngClassPending; _ck(_v, 59, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_31 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.cat), ""); var currVal_32 = i0.ɵnov(_v, 72).ngClassUntouched; var currVal_33 = i0.ɵnov(_v, 72).ngClassTouched; var currVal_34 = i0.ɵnov(_v, 72).ngClassPristine; var currVal_35 = i0.ɵnov(_v, 72).ngClassDirty; var currVal_36 = i0.ɵnov(_v, 72).ngClassValid; var currVal_37 = i0.ɵnov(_v, 72).ngClassInvalid; var currVal_38 = i0.ɵnov(_v, 72).ngClassPending; _ck(_v, 67, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_40 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.timestamp), ""); var currVal_41 = i0.ɵnov(_v, 79).ngClassUntouched; var currVal_42 = i0.ɵnov(_v, 79).ngClassTouched; var currVal_43 = i0.ɵnov(_v, 79).ngClassPristine; var currVal_44 = i0.ɵnov(_v, 79).ngClassDirty; var currVal_45 = i0.ɵnov(_v, 79).ngClassValid; var currVal_46 = i0.ɵnov(_v, 79).ngClassInvalid; var currVal_47 = i0.ɵnov(_v, 79).ngClassPending; _ck(_v, 74, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_49 = i0.ɵinlineInterpolate(1, "", ((_co.note == null) ? null : _co.note.note_id), ""); var currVal_50 = i0.ɵnov(_v, 86).ngClassUntouched; var currVal_51 = i0.ɵnov(_v, 86).ngClassTouched; var currVal_52 = i0.ɵnov(_v, 86).ngClassPristine; var currVal_53 = i0.ɵnov(_v, 86).ngClassDirty; var currVal_54 = i0.ɵnov(_v, 86).ngClassValid; var currVal_55 = i0.ɵnov(_v, 86).ngClassInvalid; var currVal_56 = i0.ɵnov(_v, 86).ngClassPending; _ck(_v, 81, 0, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56); var currVal_59 = (!_co.noteForm.valid || _co.disableSubmit); _ck(_v, 96, 0, currVal_59); }); }
export function View_NoteComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "note", [], null, [["document", "keydown"]], function (_v, en, $event) { var ad = true; if (("document:keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).handleKeyboardEvent($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NoteComponent_0, RenderType_NoteComponent)), i0.ɵdid(1, 1163264, null, 0, i5.NoteComponent, [i4.FormBuilder, i6.NotesApiService, i7.NotesDataService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NoteComponentNgFactory = i0.ɵccf("note", i5.NoteComponent, View_NoteComponent_Host_0, { note: "note" }, { closeModalEvent: "closeModalEvent", updateNoteEvent: "updateNoteEvent" }, []);
export { NoteComponentNgFactory as NoteComponentNgFactory };