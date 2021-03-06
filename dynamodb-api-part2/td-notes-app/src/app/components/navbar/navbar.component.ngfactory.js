/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./navbar.component";
import * as i2 from "../../services/notes-data/notes-data.service";
var styles_NavbarComponent = [];
var RenderType_NavbarComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_NavbarComponent, data: {} });
export { RenderType_NavbarComponent as RenderType_NavbarComponent };
export function View_NavbarComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 32, "header", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 29, "div", [["class", "container navbar"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "h1", [["class", "navbar-brand align-middle text-primary"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["TD Notes App"])), (_l()(), i0.ɵted(-1, null, ["\n\n        "])), (_l()(), i0.ɵeld(7, 0, null, null, 23, "ul", [["class", "nav navbar-nav nav-primary-right"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(9, 0, null, null, 9, "li", [["class", "nav-item p-x-1"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(11, 0, null, null, 6, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onShowNoteModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(13, 0, null, null, 0, "i", [["class", "fas fa-edit"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(15, 0, null, null, 1, "span", [["class", "button-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Add Note"])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(20, 0, null, null, 9, "li", [["class", "nav-item p-x-1"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(22, 0, null, null, 6, "button", [["class", "btn btn-light"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSignOut() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(24, 0, null, null, 0, "i", [["class", "fab fa-google"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(26, 0, null, null, 1, "span", [["class", "button-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Sign out"])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], null, null); }
export function View_NavbarComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-navbar", [], null, null, null, View_NavbarComponent_0, RenderType_NavbarComponent)), i0.ɵdid(1, 114688, null, 0, i1.NavbarComponent, [i2.NotesDataService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NavbarComponentNgFactory = i0.ɵccf("app-navbar", i1.NavbarComponent, View_NavbarComponent_Host_0, {}, { showNoteModalEvent: "showNoteModalEvent", signOutUserEvent: "signOutUserEvent" }, []);
export { NavbarComponentNgFactory as NavbarComponentNgFactory };
