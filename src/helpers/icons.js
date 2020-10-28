import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faEnvelope, faPhone, faMapMarkerAlt, faLock, faShoppingCart, faSearch} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faEnvelope, faPhone, faMapMarkerAlt, faLock, faFacebookSquare, faInstagram, faShoppingCart, faSearch);
}

export default Icons;
