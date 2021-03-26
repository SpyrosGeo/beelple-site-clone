import {useRouter} from 'next/router'
import {sites} from '../../site-data'
import SingleProject from '../../components/SingleProject'
export default function ProjectDetailPage(){
    const router = useRouter()
    const projectId = router.query.projectId


    return (
       sites.map(site => <SingleProject key={site.id} site={site}/>) 
        )
}