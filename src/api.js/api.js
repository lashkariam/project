import axios from "axios";

export const getResultsFromServer = async ({term,page}) =>{
    console.log(page)
    const response = await axios.get("https://zarebin.ir/gse/api/search/", {
      params: {
        q:term,
        query_source:"user",
        page:Number(page),
      },
    });
    return response.data.result.all.results.webs;
}



