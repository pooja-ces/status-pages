import SubScribeDialog from './SubScribeDialog';
import Footer from './Footer';
import Header from './Header';
import Incidents from './Incidents';
import Services from './Services';
import ExternalServices from './ExternalServices';
import Map from './Map';
import Maintenance from './Maintenance';
import Chart from './Chart';
const OverallStatus = () => {
    return (
        <div className='container px-12 md:px-0 md:mx-auto text-white pt-8'>
            <Header />
            <div className='pb-7'>
                <div className='bg-[#27AE60] rounded'>
                    <div className='flex justify-between items-center h-[52px] p-[15px] '>
                        <div className='text-white text-base font-bold'>All Systems Operational</div>
                        <div className='text-white text-base'>Updated a few seconds ago</div>
                    </div>
                </div>
                <Incidents />
                <Services />
                <ExternalServices />
                <Map />
                <Chart />
                <Maintenance />
                <div className='mt-12'>
                    <div className='border-[#414142] border rounded'>
                        <div className='p-4'>
                            <div className='flex justify-center items-center'>
                                <SubScribeDialog />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default OverallStatus;
