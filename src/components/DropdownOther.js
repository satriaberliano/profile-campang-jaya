import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { ContactPath, PetaPotensiPath, PotensiPath } from '../routes';

function DropdownOther() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='white' id="dropdown-basic">
        Lainnya
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to={PotensiPath}>Potensi Desa</Link>
        <Link to={PetaPotensiPath}>Peta Potensi Bencana</Link>
        <Link to={ContactPath}>Kontak</Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownOther;