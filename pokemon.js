const container = document.querySelector('#container');
const link = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for(let i=1 ;i<151 ;i++)
{
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    pokemon.classList.add('align');
    const img = document.createElement('img');
    img.setAttribute('src' ,`${link}${i}.png`);
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}