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
