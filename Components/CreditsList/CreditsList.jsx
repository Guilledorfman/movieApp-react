import Credit from '../Credit/Credit';
import './CreditsList.scss'

const CreditsList = ({data}) => {



      const credits = data.map((e, index)=>{
        let photo;
        let job;
 
        e.job === undefined ? job = e.character : job = e.job

        if(e.profile_path === null){
            photo = 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1646789242/movie2movie/placeholder-user_medlvr.webp'
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
