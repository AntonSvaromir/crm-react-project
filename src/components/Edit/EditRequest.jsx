import { serverPath } from "../../utils/constant";
import useFetch from "../../utils/useFetch";
import EditForm from "./EditForm";
import ErrorPage from "../ErrorPage";

function EditRequest({id}) {

   const { data, isLoading, error } = useFetch(serverPath + 'requests/' + id) 
   return (
			<div className='row'>
				<div className='col'>
               {error && <ErrorPage />}
               {isLoading && <h2>Loading...</h2>}
					{data && <EditForm data={data} />}
				</div>
			</div>
		)
}

export default EditRequest;