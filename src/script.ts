console.log('♡ ^•ﻌ•^ฅ ♡')
console.log('meow! meow!')
console.log('♡ ^•ﻌ•^ฅ ♡')

document.addEventListener('DOMContentLoaded', init, false)

interface GearItem {
    name: String
    description: String
    status: boolean
}

const dummyData: GearItem[] = [
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
]

async function init() {
    let table: HTMLElement | null = document.querySelector('#gearTable tbody')

    let result = ''
    dummyData.forEach((gear) => {
        result += `<tr>
        <td>${gear.name}</td>
        <td>1</td>
        <td>${gear.description}</td>
        <td>${gear.status}</td>
        </tr>`
    })
    if (table) {
        table.innerHTML = result
    }
}
