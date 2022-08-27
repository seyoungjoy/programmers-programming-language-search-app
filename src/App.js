import SearchInput from "./component/SearchInput.js";
import Suggestion from "./component/Suggestion.js";

import {fetchLanguages} from "./api.js";

export default function App({$target}){
    this.state = {
        fetchedLanguages:[],
        selectedLanguages:[]
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
        suggestion.setState({
            items:this.state.fetchedLanguages
        })

    }


    const searchInput = new SearchInput({
        $target,
        initialState: '',
        onChange: async(keyword)=> {
            if(keyword.length === 0){
                this.setState({
                    fetchedLanguages:[],
                })
            } else{
                const languages = await fetchLanguages(keyword);
                this.setState({
                    fetchedLanguages:languages
                })
                // console.log(this.state)
            }
        }
    })

    const suggestion = new Suggestion({
        $target,
        initialState:{
            items:[]
        }
    })


}