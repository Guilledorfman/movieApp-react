import Credit from '../Credit/Credit';
import './CreditsList.css'

const CreditsList = ({data}) => {



      const credits = data.map((e, index)=>{
        let photo;
        let job;
 
        e.job === undefined ? job = e.character : job = e.job

        if(e.profile_path === null){
            photo = 'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png'
        }else{
            photo = `https://image.tmdb.org/t/p/w500/${e.profile_path}`
        }

        return(
            <Credit key={index} name={e.name} id={e.id} photo={photo} job={job}/>
        )

    })

  return (
  
    <div className="credits_cont">
      {credits}
    </div>
    
    );
};

export default CreditsList;
