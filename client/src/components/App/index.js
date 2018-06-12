import React from 'react';
import VerticalContainer from '../VerticalContainer';
import HorizontalContainer from '../HorizontalContainer';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import AppContainer from '../AppContainer';

const App = () => {
    return (
        <VerticalContainer>
            <TopBar
                height={'4rem'}
                refKey={'appTopBar'}
            />
            <HorizontalContainer
                refKey={'appHorizontalContainer'}
            >
                <Sidebar
                    width={'12rem'}
                    refKey={'appSidebar'}
                />
                <AppContainer
                    refKey={'appMainContainer'}
                />
            </HorizontalContainer>
        </VerticalContainer>
    );
  // return (
  //     <VerticalContainer spacedChildren={[
  //         {
  //             height: '2rem',
  //             element: <TopBar />
  //         }
  //     ]}>
  //         <HorizontalContainer spacedChildren={[
  //             {
  //                 width: '8rem',
  //                 element: <Sidebar />
  //             }
  //         ]}>
  //             <AppContainer />
  //         </HorizontalContainer>
  //     </VerticalContainer>
  // );
};

export default App;
