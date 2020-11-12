export async function getData(url: string, setFunction: Function): Promise<any> {
  try {

    let res = await fetch(url, {
      method: "GET"
    });

    const result = await res.json()

    const { results } = result

    let beer: Array<any>;
    if (results) {
      beer = results.sort(() => Math.random() - Math.random()).slice(0, 5)
    } else {
      beer = result.sort(() => Math.random() - Math.random()).slice(0, 5)
    }

    setFunction(beer)
  } catch (err) {
    console.error(`Catched error: ${err}`)
  }
}


export async function getPokemon(exactParam: string, updateData: Function) {

  try {
    let result = await fetch(`https://pokeapi.co/api/v2/berry/${exactParam}`, {
      method: "GET"
    });

    const res = await result.json()

    console.log(res.name)
    updateData([{ name: res.name }])

  } catch (err) {
    console.error(err)
  }
}

export async function getBeer(exactParam: string, updateData: Function) {
  try {
    let res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${exactParam}`, {
      method: "GET"
    });


    const result = await res.json();
    console.log(result)
    if (result.length > 0) {
      updateData(result)
    }

  } catch (err) {
    console.error(err)
  }
}