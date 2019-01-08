const listElement = document.querySelector('#list');
const searchImput = document.querySelector('#search');
const languageSelect = document.querySelector('#language-tags')

let languageTag = 'en-US';

let listItems = [
    {
        full_name: 'test',
        created_at: '2020-07-27T20:10:50Z',
        forks: 2750
    },
    {
        full_name: 'test',
        created_at: '2020-07-27T20:10:50Z',
        forks: 2750
    },
]

languageSelect.addEventListener('change', ()=> {
    languageTag = languageSelect.value;
    render();
})

function render() {
    let html = '';
    const numberFormatter = new Intl.NumberFormat(languageTag);
    const dateFormatter = new Intl.DateTimeFormat(languageTag, { week: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    listItems.forEach((item) => {

        const created_at = dateFormatter.format(new Date(item.created_at));
        const forks = numberFormatter.format(item.forks);

        html += `
        <li>
            <div>
                <b>Name:</b> ${item.full_name}
            </div>
            <div>
                <b>Created At:</b> ${created_at}
            </div>
            <div>
                <b>Forks:</b> ${forks}
            </div>
        </li>
        `
    });
    listElement.innerHTML = html;

}

render();