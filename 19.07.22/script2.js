const button = document.querySelector('#form');

let User = {}

button.addEventListener('submit', () => {
    const organization = document.querySelector('#organization');
    const jobTitle = document.querySelector('#Job_title');
    const salaryMonth = document.querySelector('#salary1mth');
    const salary3Month = document.querySelector('#salary3mth');
    const phoneName = document.querySelector('#phone_name');
    const costItem = document.querySelector('#cost_item');
    const moreItem = document.querySelector('#more_items');
    const resultCredit = document.querySelector('#result_credit');
    const seeCredit = document.querySelector('#see_credit');
    const continuesCredit = document.querySelector('#continues_credit');
    const pickupPoint = document.querySelector('#pickup_point');

    localStorage.organization = organization.value;
    localStorage.jobTitle = jobTitle.value;
    localStorage.salaryMonth = salaryMonth.value;
    localStorage.salary3Month = salary3Month.value;
    localStorage.phoneName = phoneName.value;
    localStorage.costItem = costItem.value;
    localStorage.moreItem = moreItem.value;
    localStorage.resultCredit = resultCredit.value;
    localStorage.seeCredit = seeCredit.value;
    localStorage.continuesCredit = continuesCredit.value;
    localStorage.pickupPoint = pickupPoint.value;
})

User = localStorage;

console.log(User)