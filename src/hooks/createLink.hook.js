import { useHTTP } from "./http.hook";


export const useCreateLink = ()=>{
    const { request } = useHTTP()
    
    function validURL(str) {
        let pattern = new RegExp('^(htt(ps|p)?:\\/\\/)?'+
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
        '(((\\d{1,3}\\.){3}\\d{1,3}))|localhost)'+
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        '(\\?[;&a-z\\d%_.~+=-]*)?'+
        '(\\#[-a-z\\d_]*)?$','i');
        return !!pattern.test(str);
    }
    
    const create = async (link, auth)=>{
        if(!validURL(link)) return {failed: 'Invalid URL'}
        try {
            let headers = {'Authorization': `Bearer ${auth.token}`}
            const ok = await request('/api/link/generate', 'POST', {link}, headers)
            if(typeof ok === 'string') return {failed: ok}
            return {links: ok, failed: false}
        } catch (e) {
            console.log(e)
        }
    }
    return create
}


