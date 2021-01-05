import axios from 'axios'

function fetchExperiment(url){
    return new Promise((resolve, reject) => {
        axios.get(url).then((response) => {
            resolve(response.data)
        }).catch((err) => reject(err))
    });
    
}

export {fetchExperiment}