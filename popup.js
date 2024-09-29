// document.addEventListener('DOMContentLoaded', () => {
//     const linkedin_input = document.getElementById('linkedin');
//     const github_input = document.getElementById('github');
//     const portfolio_input = document.getElementById('portfolio');
//     const custom_link_container = document.getElementById('custom-link');

//     chrome.storage.sync.get(['linkedin', 'github', 'portfolio', 'custom_link'], (result) => {
//         if (result.github) github_input.value = result.github;
//         if (result.linkedin) linkedin_input.value = result.linkedin;
//         if (result.portfolio) portfolio_input.value = result.portfolio;

//         if (result.custom_link) {
//             result.custom_link.forEach(link => {
//                 addCustomLink(link.name, link.url);
//             });
//         }
//     });

//     document.getElementById('save-link').addEventListener('click', () => {
//         const github = github_input.value;
//         const linkedin = linkedin_input.value;
//         const portfolio = portfolio_input.value;

//         const custom_link = Array.from(custom_link_container.children).map(link_container => {
//             const inputs = link_container.querySelectorAll('input');
//             return {
//                 name: inputs[0].value,
//                 url: inputs[1].value
//             };
//         });

//         chrome.storage.sync.set({linkedin, github, portfolio, custom_link}, () => {
//             showSnackBar('Saved!!!');
//         });
//     });

//     document.getElementById('copy-linkedin').addEventListener('click', () => {
//         copyToClipboard(linkedin_input.value);
//     });

//     document.getElementById('copy-github').addEventListener('click', () => {
//         copyToClipboard(github_input.value);
//     });

//     document.getElementById('copy-portfolio').addEventListener('click', () => {
//         copyToClipboard(portfolio_input.value);
//     });

//     function copyToClipboard(link) {
//         navigator.clipboard.writeText(link).then(() => {
//             showSnackBar('Copied!!!');
//         });
//     }

//     document.getElementById('add-link').addEventListener('click', () => {
//         addCustomLink();
//     });

//     function showSnackBar(message) {
//         const snackbar = document.getElementById('snackbar');
//         snackbar.textContent = message;
//         snackbar.style.visibility = 'visible';
//         snackbar.style.animation = 'fadein 0.5s, fadeout 0.5s 2.5s';
//         setTimeout(() => {
//             snackbar.style.visibility = 'hidden';
//         }, 3000);
//     }

//     function addCustomLink(name='', url='') {
//         const new_link_container = document.createElement('div');
//         new_link_container.className = 'container';

//         const new_name_label = document.createElement('img');
//         new_name_label.className = 'icon';
//         new_name_label.src = 'images/black-cat.png';
//         new_link_container.appendChild(new_name_label);

//         const new_name_input = document.createElement('input');
//         new_name_input.type = 'text';
//         new_name_input.placeholder = 'Link';
//         new_name_input.value = name;
//         new_name_input.className = 'short-input';
//         new_link_container.appendChild(new_name_input);

//         const new_link_input = document.createElement('input');
//         new_link_input.type = 'text';
//         new_link_input.placeholder = 'URL';
//         new_link_input.value = url;
//         new_link_container.appendChild(new_link_input);

//         const delete_button = document.createElement('button');
//         delete_button.textContent = 'x';
//         delete_button.title = 'delete field';
//         delete_button.className = 'button delete-button';
//         delete_button.addEventListener('click', () => {
//             new_link_container.remove();
//         });
//         new_link_container.appendChild(delete_button);

//         const new_copy_icon = document.createElement('img');
//         new_copy_icon.src = 'images/copy.png';
//         new_copy_icon.className = 'copy-icon';
//         new_copy_icon.alt = 'Copy';
//         new_copy_icon.addEventListener('click', () => {
//             copyToClipboard(new_link_input.value);
//         });
//         new_link_container.appendChild(new_copy_icon);

//         custom_link_container.appendChild(new_link_container);
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const linkedin_input = document.getElementById('linkedin');
    const github_input = document.getElementById('github');
    const portfolio_input = document.getElementById('portfolio');
    const custom_link_container = document.getElementById('custom-link'); // Make sure this ID exists in HTML

    chrome.storage.sync.get(['linkedin', 'github', 'portfolio', 'customLinks'], (result) => {
        if (result.github) github_input.value = result.github;
        if (result.linkedin) linkedin_input.value = result.linkedin;
        if (result.portfolio) portfolio_input.value = result.portfolio;

        if (result.customLinks) {
            result.customLinks.forEach(link => {
                addCustomLink(link.name, link.url);
            });
        }
    });

    document.getElementById('save-link').addEventListener('click', () => {
        const github = github_input.value;
        const linkedin = linkedin_input.value;
        const portfolio = portfolio_input.value;

        const customLinks = Array.from(custom_link_container.children).map(link_container => {
            const inputs = link_container.querySelectorAll('input');
            return {
                name: inputs[0].value,
                url: inputs[1].value
            };
        });

        chrome.storage.sync.set({linkedin, github, portfolio, customLinks}, () => {
            showSnackBar('Saved!!!');
        });
    });

    document.getElementById('copy-linkedin').addEventListener('click', () => {
        copyToClipboard(linkedin_input.value);
    });

    document.getElementById('copy-github').addEventListener('click', () => {
        copyToClipboard(github_input.value);
    });

    document.getElementById('copy-portfolio').addEventListener('click', () => {
        copyToClipboard(portfolio_input.value);
    });

    document.getElementById('add-link').addEventListener('click', () => {
        addCustomLink();
    });

    function copyToClipboard(link) {
        navigator.clipboard.writeText(link).then(() => {
            showSnackBar('Copied!!!');
        });
    }

    function showSnackBar(message) {
        const snackbar = document.getElementById('snackbar');
        snackbar.textContent = message;
        snackbar.style.visibility = 'visible';
        snackbar.style.animation = 'fadein 0.5s, fadeout 0.5s 2.5s';
        setTimeout(() => {
            snackbar.style.visibility = 'hidden';
        }, 3000);
    }

    function addCustomLink(name='', url='') {
        const new_link_container = document.createElement('div');
        new_link_container.className = 'container';

        const new_name_label = document.createElement('img');
        new_name_label.className = 'icon';
        new_name_label.src = 'images/paw-print.png';
        new_link_container.appendChild(new_name_label);

        const new_name_input = document.createElement('input');
        new_name_input.type = 'text';
        new_name_input.placeholder = 'Link';
        new_name_input.value = name;
        new_name_input.className = 'short-input';
        new_link_container.appendChild(new_name_input);

        const new_link_input = document.createElement('input');
        new_link_input.type = 'text';
        new_link_input.placeholder = 'URL';
        new_link_input.value = url;
        new_link_container.appendChild(new_link_input);

        const delete_button = document.createElement('button');
        delete_button.textContent = 'x';
        delete_button.title = 'delete field';
        delete_button.className = 'button delete-button';
        delete_button.addEventListener('click', () => {
            new_link_container.remove();
        });
        new_link_container.appendChild(delete_button);

        const new_copy_icon = document.createElement('img');
        new_copy_icon.src = 'images/copy.png';
        new_copy_icon.className = 'copy-icon';
        new_copy_icon.alt = 'Copy';
        new_copy_icon.addEventListener('click', () => {
            copyToClipboard(new_link_input.value);
        });
        new_link_container.appendChild(new_copy_icon);

        custom_link_container.appendChild(new_link_container);
    }
});