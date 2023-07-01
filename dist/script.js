"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('♡ ^•ﻌ•^ฅ ♡');
console.log('meow! meow!');
console.log('♡ ^•ﻌ•^ฅ ♡');
document.addEventListener('DOMContentLoaded', init, false);
const dummyData = [
    {
        name: 'Sleeping bag',
        description: 'good enough',
        status: true,
    },
    {
        name: 'Stove',
        description: 'eat that food',
        status: true,
    },
];
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        let table = document.querySelector('#gearTable tbody');
        let result = '';
        dummyData.forEach((gear) => {
            result += `<tr>
        <td>${gear.name}</td>
        <td>1</td>
        <td>${gear.description}</td>
        <td>${gear.status}</td>
        </tr>`;
        });
        if (table) {
            table.innerHTML = result;
        }
    });
}
