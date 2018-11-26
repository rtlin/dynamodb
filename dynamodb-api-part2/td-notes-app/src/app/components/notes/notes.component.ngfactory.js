/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../spinner/spinner-component.ngfactory";
import * as i2 from "../spinner/spinner-component";
import * as i3 from "./note-snapshot.component.ngfactory";
import * as i4 from "./note-snapshot.component";
import * as i5 from "../../services/notes-api/notes-api.service";
import * as i6 from "./note.component.ngfactory";
import * as i7 from "./note.component";
import * as i8 from "@angular/forms";
import * as i9 from "../../services/notes-data/notes-data.service";
import * as i10 from "@angular/common";
import * as i11 from "ngx-infinite-scroll";
import * as i12 from "./notes.component";
var styles_NotesComponent = [];
var RenderType_NotesComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_NotesComponent, data: {} });
export { RenderType_NotesComponent as RenderType_NotesComponent };
function View_NotesComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "div", [["class", "spinner-container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "spinner", [["loadingText", "Loading...Please wait."]], null, null, null, i1.View_SpinnerComponent_0, i1.RenderType_SpinnerComponent)), i0.ɵdid(5, 114688, null, 0, i2.SpinnerComponent, [], { loadingText: [0, "loadingText"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = "Loading...Please wait."; _ck(_v, 5, 0, currVal_0); }, null); }
function View_NotesComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "div", [["class", "alert alert-warning"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(2, 0, null, null, 7, "div", [["class", "message-wrap"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Hey there! Welcome to TD Notes App."])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(7, 0, null, null, 1, "button", [["class", "btn btn-success auto_left_margin"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onShowNoteModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["Click to create your first note"])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n        "]))], null, null); }
function View_NotesComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["role", "alert"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵted(1, null, ["\n            ", "\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "alert alert-", _co.alert.type, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.alert.message; _ck(_v, 1, 0, currVal_1); }); }
function View_NotesComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "li", [["class", "list-group-item"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openNote(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "note-snapshot", [["class", "note-snapshot"]], null, [[null, "deleteNoteEvent"], [null, "refreshNotesEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("deleteNoteEvent" === en)) {
        var pd_0 = (_co.deleteNote(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("refreshNotesEvent" === en)) {
        var pd_1 = (_co.refreshNotes() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_NoteSnapshotComponent_0, i3.RenderType_NoteSnapshotComponent)), i0.ɵdid(3, 114688, null, 0, i4.NoteSnapshotComponent, [i5.NotesApiService], { note: [0, "note"] }, { deleteNoteEvent: "deleteNoteEvent", refreshNotesEvent: "refreshNotesEvent" }), (_l()(), i0.ɵted(-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); }, null); }
function View_NotesComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "div", [["class", "list-loading"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "div", [["class", "spinner-container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "spinner", [], null, null, null, i1.View_SpinnerComponent_0, i1.RenderType_SpinnerComponent)), i0.ɵdid(5, 114688, null, 0, i2.SpinnerComponent, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n            "]))], function (_ck, _v) { _ck(_v, 5, 0); }, null); }
function View_NotesComponent_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "note", [["class", "page-modal"]], null, [[null, "updateNoteEvent"], [null, "closeModalEvent"], ["document", "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("document:keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).handleKeyboardEvent($event) !== false);
        ad = (pd_0 && ad);
    } if (("updateNoteEvent" === en)) {
        var pd_1 = (_co.updateNote($event) !== false);
        ad = (pd_1 && ad);
    } if (("closeModalEvent" === en)) {
        var pd_2 = (_co.onCloseNoteModal() !== false);
        ad = (pd_2 && ad);
    } return ad; }, i6.View_NoteComponent_0, i6.RenderType_NoteComponent)), i0.ɵdid(1, 1163264, null, 0, i7.NoteComponent, [i8.FormBuilder, i5.NotesApiService, i9.NotesDataService], { note: [0, "note"] }, { closeModalEvent: "closeModalEvent", updateNoteEvent: "updateNoteEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectedNote; _ck(_v, 1, 0, currVal_0); }, null); }
export function View_NotesComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 26, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 23, "div", [["class", "inner-wrap"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NotesComponent_1)), i0.ɵdid(5, 16384, null, 0, i10.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NotesComponent_2)), i0.ɵdid(8, 16384, null, 0, i10.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NotesComponent_3)), i0.ɵdid(11, 16384, null, 0, i10.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(13, 0, null, null, 11, "div", [["class", "list-group-container"], ["infinite-scroll", ""]], null, [[null, "scrolled"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("scrolled" === en)) {
        var pd_0 = (_co.onScrollDown() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(14, 4866048, null, 0, i11.InfiniteScrollDirective, [i0.ElementRef, i0.NgZone], { infiniteScrollDistance: [0, "infiniteScrollDistance"], infiniteScrollThrottle: [1, "infiniteScrollThrottle"] }, { scrolled: "scrolled" }), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(16, 0, null, null, 4, "ul", [["class", "list-group"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NotesComponent_4)), i0.ɵdid(19, 802816, null, 0, i10.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NotesComponent_5)), i0.ɵdid(23, 16384, null, 0, i10.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(28, 0, null, null, 4, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NotesComponent_6)), i0.ɵdid(31, 16384, null, 0, i10.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoading; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.noNotesFound; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.alert.message; _ck(_v, 11, 0, currVal_2); var currVal_3 = 2; var currVal_4 = 350; _ck(_v, 14, 0, currVal_3, currVal_4); var currVal_5 = _co.userNotes; _ck(_v, 19, 0, currVal_5); var currVal_6 = _co.isListLoading; _ck(_v, 23, 0, currVal_6); var currVal_7 = _co.showNote; _ck(_v, 31, 0, currVal_7); }, null); }
export function View_NotesComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "notes", [], null, null, null, View_NotesComponent_0, RenderType_NotesComponent)), i0.ɵdid(1, 114688, null, 0, i12.NotesComponent, [i5.NotesApiService, i9.NotesDataService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NotesComponentNgFactory = i0.ɵccf("notes", i12.NotesComponent, View_NotesComponent_Host_0, {}, { showNoteModalEvent: "showNoteModalEvent" }, []);
export { NotesComponentNgFactory as NotesComponentNgFactory };
