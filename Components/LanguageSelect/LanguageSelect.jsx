import React from 'react'

const LanguageSelect = ({setLanguage}) => {

    const languages= [
    { code: '', name: 'Any language' },
    { code: "ar", name: 'Arabic' },
    { code: "bg", name: 'Bulgarian' },
    { code: "bn", name: 'Bengali' },
    { code: "ca", name: 'Catalan' },
    { code: "ch", name: 'Chamorro' },
    { code: "cs", name: 'Czech' },
    { code: "da", name: 'Danish' },
    { code: "de", name: 'German' },
    { code: "el", name: 'Greek' },
    { code: "en", name: 'English' },
    { code: "eo", name: 'Esperanto' },
    { code: "es", name: 'Spanish' },
    { code: "eu", name: 'Basque' },
    { code: "fa", name: 'Persian' },
    { code: "fi", name: 'Finnish' },
    { code: "fr", name: 'French' },
    { code: "he", name: 'Hebrew' },
    { code: "hi", name: 'Hindi' },
    { code: "hu", name: 'Hungarian' },
    { code: "id", name: 'Indonesian' },
    { code: "it", name: 'Italian' },
    { code: "ja", name: 'Japanese' },
    { code: "ka", name: 'Georgian' },
    { code: "kn", name: 'Kannada' },
    { code: "ko", name: 'Korean' },
    { code: "lt", name: 'Lithuanian' },
    { code: "ml", name: 'Malayalam' },
    { code: "nb", name: 'Norwegian Bokmål' },
    { code: "nl", name: 'Dutch' },
    { code: "no", name: 'Norwegian' },
    { code: "pl", name: 'Polish' },
    { code: "pt", name: 'Portuguese' },
    { code: "ro", name: 'Romanian' },
    { code: "ru", name: 'Russian' },
    { code: "sk", name: 'Slovak' },
    { code: "sl", name: 'Slovenian' },
    { code: "sr", name: 'Serbian' },
    { code: "sv", name: 'Swedish' },
    { code: "ta", name: 'Tamil' },
    { code: "te", name: 'Telugu' },
    { code: "th", name: 'Thai' },
    { code: "tr", name: 'Turkish' },
    { code: "uk", name: 'Ukrainian' },
    { code: "vi", name: 'Vietnamese' },
    { code: "zh", name: 'Chinese' }
]

const optionList = languages.map((e, index)=>{
    return(<option key={index} value={e.code}>{e.name}</option>)   
})
function changeLanguage(e){
    setLanguage(e);
}

  return (
      <>
            <select name="Languages" onChange={(e)=>{changeLanguage(e.target.value)}} id="">
                {optionList}
            </select>
      </>
  )
}

export default LanguageSelect