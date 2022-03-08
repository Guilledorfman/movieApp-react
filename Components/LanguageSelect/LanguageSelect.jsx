import React from 'react'
import './LanguageSelect.scss'

const LanguageSelect = ({setLanguage}) => {
    
    const languages= [
        { code: '', name: 'Any language' },
        { code: "ar", name: 'Arabic' },
        { code: "eu", name: 'Basque' },
        { code: "bn", name: 'Bengali' },
        { code: "bg", name: 'Bulgarian' },
        { code: "ca", name: 'Catalan' },
        { code: "ch", name: 'Chamorro' },
        { code: "zh", name: 'Chinese' },
        { code: "cs", name: 'Czech' },
        { code: "da", name: 'Danish' },
        { code: "nl", name: 'Dutch' },
        { code: "en", name: 'English' },
        { code: "eo", name: 'Esperanto' },
        { code: "fi", name: 'Finnish' },
        { code: "fr", name: 'French' },
        { code: "ka", name: 'Georgian' },
        { code: "de", name: 'German' },
        { code: "el", name: 'Greek' },
        { code: "he", name: 'Hebrew' },
        { code: "hi", name: 'Hindi' },
        { code: "hu", name: 'Hungarian' },
        { code: "id", name: 'Indonesian' },
        { code: "it", name: 'Italian' },
        { code: "ja", name: 'Japanese' },
        { code: "kn", name: 'Kannada' },
        { code: "ko", name: 'Korean' },
        { code: "lt", name: 'Lithuanian' },
        { code: "ml", name: 'Malayalam' },
        { code: "no", name: 'Norwegian' },
        { code: "nb", name: 'Norwegian Bokmål' },
        { code: "fa", name: 'Persian' },
        { code: "pl", name: 'Polish' },
        { code: "pt", name: 'Portuguese' },
        { code: "ro", name: 'Romanian' },
        { code: "ru", name: 'Russian' },
        { code: "sr", name: 'Serbian' },
        { code: "sk", name: 'Slovak' },
        { code: "sl", name: 'Slovenian' },
        { code: "es", name: 'Spanish' },
        { code: "sv", name: 'Swedish' },
        { code: "ta", name: 'Tamil' },
        { code: "te", name: 'Telugu' },
        { code: "th", name: 'Thai' },
        { code: "tr", name: 'Turkish' },
        { code: "uk", name: 'Ukrainian' },
        { code: "vi", name: 'Vietnamese' }
]

const optionList = languages.map((e, index)=>{
    return(<option key={index} value={e.code}>{e.name}</option>)   
})
function changeLanguage(e){
    setLanguage(e);
}

  return (
            <select name="Languages" onChange={(e)=>{changeLanguage(e.target.value)}} id="">
                {optionList}
            </select>
      
  )
}

export default LanguageSelect