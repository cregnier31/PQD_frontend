import React from "react";
import './app.css';
import {Header} from '../header';
import Tour from "reactour";

export function AppView(props) {
  const tourConfig = [
    {
      selector: '[data-tut="reactour__1"]',
      content: `This product quality dashboard is intended for new CMEMS users as for experiencedusers.  You will find here uncertainty estimates available at a monthly frequency for all products of the catalogue. `
    },
    {
      selector: '[data-tut="reactour__2"]',
      content: `You want to have a global view of the CMEMS products’quality on your area of interest? Choose your area of interest using this banner and display the area on the map just below. The website will then show you quality information related to products available for this area. Come back to this banner to change the area of interest.`
    },
    // {
    //   selector: '[data-tut="reactour__3"]',
    //   content: `You are looking for recent uncertainty estimates for one given CMEMS product?You can use this search zone to display directly the quality information related to a given product using the CMEMS product name (ex: GLO_ANALYSIS_FORECAST_001_024)`
    // },
    {
      selector: '[data-tut="reactour__4"]',
      content: 'You want to have a global view of the CMEMS products’quality for a given family of parameters?Select either Blue, Green or White parameter families to display quality information for the blue ocean (currents, waves,temperature, salinity ...), the green ocean (phytoplankton, CO2, pH, ...), or the white ocean (sea ice concentration, sea ice drift...)'
    },
    {
      selector: '[data-tut="reactour__5"]',
      content: 'Select  a parameter to display quality information for this parameter, on your area of interest'
    },
    {
      selector: '[data-tut="reactour__6"]',
      content: 'In this top panel, basin scale generic quality information isdisplayed for your area and parameter of interest.'
    },
    {
      selector: '[data-tut="reactour__7"]',
      content: 'An estimate of the daily number of satellite observations used to produce CMEMS observational and modelproducts is a first indicator of potential quality change over time at the basin scale.'
    },
    {
      selector: '[data-tut="reactour__8"]',
      content: 'An estimate of the daily number of in situ observations (platforms) used to produce CMEMS observationaland model products is also an indicator of potential quality change over time at the basin scale. In situ observations are also used as “ground truth” validation datasets. As they are far less in situ than satellite observations, their sparsity at some times of the year potentially indicates a drop in quality for many products on thearea of interest.'
    },
    {
      selector: '[data-tut="reactour__9"]',
      content: 'Three complementary uncertainty indicators are provided at basin scale for model forecast products for your area and parameter of interest. The 1-day forecast skill score, the explained variance, and the scatter index. These three scores are computed for the current month using an average of past scores for this month. Minimum and maximum values over the full period are shown for each score.'
    },
    {
      selector: '[data-tut="reactour__10"]',
      content: 'Use these specific filters to display estimated accuracy numbers (expert validation metrics) on a given product parameter, computed on smallergeographical areas. You can choose among various satellite or in situ observational validation datasets. You may look at surface or subsurface results when available.'
    },
    {
      selector: '[data-tut="reactour__11"]',
      content: 'Expert validation metrics will be displayed in the bottom panel'
    },
    {
      selector: '[data-tut="reactour__12"]',
      content: 'A direct link to the product andits documentation (including reference product quality documents) is available, as well as a link to information on theproducer, which may include more specific validation information.'
    },
    {
      selector: '[data-tut="reactour__13"]',
      content: 'An interactive map allows use to select a specific geographical area, and to display an estimated accuracy numberon this area. The evolution in time of this quantity is shown in the adjacent window'
    },
    {
      selector: '[data-tut="reactour__14"]',
      content: 'Whenever available, correlations with fixed buoyscan be shown on this map by clicking this box.'
    },
    // {
    //   selector: '[data-tut="reactour__15"]',
    //   content: 'Click on a buoy to display the observed time series and the equivalent time series in other CMEMS products at this location and for this parameter. '
    // },
    {
      selector: '[data-tut="reactour__16"]',
      content: 'Time series of estimated accuracy numbers appear in thiswindow, so do potential other expert validation diagnostics provided by observational products producers'
    },
  ];
  const [isTourOpen, setIsTourOpen] = React.useState(false);

  const closeTour = () => {
    setIsTourOpen(false);
  };
  
  const openTour = () => {
    setIsTourOpen(true);
  };
  return(
    <div className="App">
      <div className="App-header">
        <Header openTour={openTour} isTourOpen={isTourOpen} />
        <Tour
            onRequestClose={closeTour}
            steps={tourConfig}
            isOpen={isTourOpen}
            maskClassName="mask"
            className="helper"
            rounded={5}
          />
      </div>
    </div>
  )
};