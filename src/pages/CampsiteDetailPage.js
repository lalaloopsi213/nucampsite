import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from '../features/Campsites/campsitesSlice'
import SubHeader from '../components/SubHeader';
import CampsiteDetail from '../features/Campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
    const { campsiteID } = useParams();
    const campsite = selectCampsiteById(campsiteID);

    return (
        <Container>
            <Row>
           <SubHeader current={campsite.name} detail={true} />
                <CampsiteDetail campsite={campsite} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;