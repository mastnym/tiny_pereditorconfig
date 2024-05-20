// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Per Tiny editor config plugin
 *
 * @module      tiny_pereditorconfig/plugin
 * @copyright   2024 Martin Mastny <mastnym@vscht.cz>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


import url from 'core/url';
export const configure = (instanceConfig) => {
    if (instanceConfig.target.closest('.ddwtoshtml')){
        return {
            toolbar: [{
                name: "history",
                items: ['undo', 'redo']
            },
                {
                    name: "formatting",
                    items: ['bold', 'italic', 'superscript', 'subscript', 'code']
                }],
            menubar: false,
            content_css: url.relativeUrl('/lib/editor/tiny/plugins/supsub/styles.css'),
            height:100,
        };
    }
    return instanceConfig;
};
