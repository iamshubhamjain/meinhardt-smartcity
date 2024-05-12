import React from "react";
import smartcitylogo from "../images/smart-city-logo.png";
import citynamelogo from "../images/city-name-logo.png";
import airportlogo from "../images/airport-logo.png";
import townshiplogo from "../images/township-logo.png";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { menuToggle } from '../actions/menuActions'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class HomePage extends React.Component {
    constructor(){
        super();
        
        this.state = {
            nslWindowView:'startEvaluation',
            // nslWindowView:'airportTransaction',
            // nslWindowView:'townshipTransaction',
            cityName : "",
            sectorName:"",

            //Airport Sector, Civic&Social Domain proxies 
            airportCivicAndSocialTourism :"",
            airportCivicAndSocialSecurity:"",
            airportCivicAndSocialPublicPolicyInfraWebsite:"",
            airportCivicAndSocialPublicPolicyInfraApp:"",
            airportCivicAndSocialPublicPolicyInfraAssistance:"",
            airportCivicAndSocialPublicPolicyInfraDigitalTwin:"",
            airportCivicAndSocialPublicPolicyInfraAnnualReport:"",
            
            //Airport Sector, Health & Well Being Domain proxies
            airportHealthAndWellBeingHealthSafety:"",
            airportHealthAndWellBeingDigitalServicesEducation:"",
            airportHealthAndWellBeingWasteManagement:"",
            airportHealthAndWellBeingCarbon:"",

            //Airport Sector, Health & Well Being Domain proxies
            airportBusinessEnvironmentDigitalPayments:"",

            //Airport Sector, Transportation Domain proxies
            airportTransportationDigitalTicketing:"",
            airportTransportationDigitalBiometrics:"",
            airportTransportationDigitalCheckIn:"",
            airportTransportationDigitalBaggage:"",
            airportTransportationTransportMetro:"",
            airportTransportationTransportBus:"",
            airportTransportationTransportCarPark:"",
            airportTransportationTransportCab:"",
            airportTransportationCustomerCentricness:"",
            airportTransportationTraffficArrivals:"",
            
            //Airport Sector, Infrastructure Domain proxies
            airportInfrastructureEntertainment:"",
            airportInfrastructureRenewableSAF:"",
            airportInfrastructureRenewableCarbon:"",
            airportInfrastructureRenewableEnergyDesign:"",
            airportInfrastructureMegastructure:"",
            airportInfrastructureCitizenUsage:"",
            
            //Airport Sector, Civic&Social Domain Parameter Score
            airportCivicAndSocialTourismScore :"",
            airportCivicAndSocialSecurityScore:"",
            airportCivicAndSocialPublicPolicyInfraScore:"",
            
            //Airport Sector, Health & Well Being Domain Parameter Score
            airportHealthAndWellBeingHealthSafetyScore:"",
            airportHealthAndWellBeingDigitalServicesEducationScore:"",
            airportHealthAndWellBeingWasteManagementScore:"",
            airportHealthAndWellBeingCarbonScore:"",

            //Airport Sector, Health & Well Being Domain Parameter Score
            airportBusinessEnvironmentDigitalPaymentsScore:"",

            //Airport Sector, Transportation Domain Parameter Score
            airportTransportationDigitalScore:"",
            airportTransportationTransportScore:"",
            airportTransportationCustomerCentricnessScore:"",
            airportTransportationTraffficScore:"",
            
            //Airport Sector, Infrastructure Domain Parameter Score
            airportInfrastructureEntertainmentScore:"",
            airportInfrastructureRenewableScore:"",
            airportInfrastructureMegastructureScore:"",
            airportInfrastructureCitizenUsageScore:"",

            //Airport Sector, Civic&Social Domain Score
            airportCivicAndSocialScore :"",
            airportCivicAndSocialSum : "",
            
            //Airport Sector, Health & Well Being Domain Score
            airportHealthAndWellBeingScore:"",
            airportHealthAndWellBeingSum:"",
            
            //Airport Sector, Health & Well Being Domain Score
            airportBusinessEnvironmentScore:"",
            airportBusinessEnvironmentSum:"",

            //Airport Sector, Transportation Domain Score
            airportTransportationScore:"",
            airportTransportationSum:"",
            
            //Airport Sector, Infrastructure Domain Score
            airportInfrastructureScore:"",
            airportInfrastructureSum:"",
            
            //Airport Sector Score
            airportOverallScore:"",
      

            //Township CivicAndSocial Sector, Civic&Social Domain proxies
            townshipCivicAndSocialTourism:"",
            townshipCivicAndSocialUtilitiesInternet:"",
            townshipCivicAndSocialUtilitiesWater:"",
            townshipCivicAndSocialUtilitiesSanitation:"",
            townshipCivicAndSocialUtilitiesEnergy:"",
            townshipCivicAndSocialSecurity:"",
            townshipCivicAndSocialPublicPolicyInfraWebApp:"",
            townshipCivicAndSocialPublicPolicyInfraCharterHealthEdu:"",
            townshipCivicAndSocialPublicPolicyInfraCharterTax:"",
            townshipCivicAndSocialPublicPolicyInfraCharterHousing:"",
            townshipCivicAndSocialPublicPolicyInfraDoc:"",

            //Township HealthAndWellBeing Sector, Health&Well-being Domain proxies
            townshipHealthAndWellBeingHospital:"",
            townshipHealthAndWellBeingDigital:"",
            townshipHealthAndWellBeingWasteManagement:"",
            townshipHealthAndWellBeingEnvironmental:"",

            //Township BusinessEnvironment Sector, Business Environment Domain proxies
            townshipBusinessEnvironmentInnovation:"",
            townshipBusinessEnvironmentDigital:"",
            townshipBusinessEnvironmentMSME:"",

            //Township Transportation Sector, Transportation Domain proxies
            townshipTransportationDigitalPayment:"",
            townshipTransportationDigitalSchedule:"",
            townshipTransportationDigitalCabApp:"",
            townshipTransportationDigitalSafety:"",
            townshipTransportationTransportRail:"",
            townshipTransportationTransportBus:"",
            townshipTransportationTransportTuk:"",
            townshipTransportationTransportCycle:"",
            townshipTransportationCustomerCentricness:"",
            townshipTransportationTrafffic:"",

            //Township Infrastructure Sector, Infrastructure Domain proxies 
            townshipInfrastructureEntertainment:"",
            townshipInfrastructureRenewable:"",
            townshipInfrastructureMegastructure:"",
            townshipInfrastructureCitizenUsage:"",
            
            //Township Sector, Civic&Social parameter scores
            townshipCivicAndSocialTourismScore:"",
            townshipCivicAndSocialUtilitiesScore:"",
            townshipCivicAndSocialSecurityScore:"",
            townshipCivicAndSocialPublicPolicyInfraScore:"",
            
            //Township Sector, Health&Well-being parameter scores
            townshipHealthAndWellBeingHospitalScore:"",
            townshipHealthAndWellBeingDigitalScore:"",
            townshipHealthAndWellBeingWasteManagementScore:"",
            townshipHealthAndWellBeingEnvironmentalScore:"",

            //Township Sector, Business Environment parameter scores
            townshipBusinessEnvironmentInnovationScore:"",
            townshipBusinessEnvironmentDigitalScore:"",
            townshipBusinessEnvironmentMSMEScore:"",

            //Township Sector, Transportation parameter scores
            townshipTransportationDigitalScore:"",
            townshipTransportationTransportScore:"",
            townshipTransportationCustomerCentricnessScore:"",
            townshipTransportationTraffficScore:"",

            //Township Sector, Infrastructure parameter scores
            townshipInfrastructureEntertainmentScore:"",
            townshipInfrastructureRenewableScore:"",
            townshipInfrastructureMegastructureScore:"",
            townshipInfrastructureCitizenUsageScore:"",
            
            //Township Sector, Civic&Social Domain Score
            townshipCivicAndSocialScore :"",
            townshipCivicAndSocialSum : "",
            
            //Township Sector, Health & Well Being Domain Score
            townshipHealthAndWellBeingScore:"",
            townshipHealthAndWellBeingSum:"",
            
            //Township Sector, Health & Well Being Domain Score
            townshipBusinessEnvironmentScore:"",
            townshipBusinessEnvironmentSum:"",

            //Township Sector, Transportation Domain Score
            townshipTransportationScore:"",
            townshipTransportationSum:"",
            
            //Township Sector, Infrastructure Domain Score
            townshipInfrastructureScore:"",
            townshipInfrastructureSum:"",
            
            //Township Sector Score
            townshipOverallScore:"",
            
            isLoading : false,
            currentStep:1
        }

    }

    
    updateCityName(eCityName){
        this.setState({cityName:eCityName});
    }

    updateAirportCivicAndSocialTourism(inputAirportCivicAndSocialTourism){
        this.setState({airportCivicAndSocialTourism:inputAirportCivicAndSocialTourism});
    }
    updateAirportCivicAndSocialSecurity(inputAirportCivicAndSocialSecurity){
        this.setState({airportCivicAndSocialSecurity:inputAirportCivicAndSocialSecurity});
    }
    updateAirportCivicAndSocialPublicPolicyInfraWebsite(inputAirportCivicAndSocialPublicPolicyInfraWebsite){
        this.setState({airportCivicAndSocialPublicPolicyInfraWebsite:inputAirportCivicAndSocialPublicPolicyInfraWebsite});
    }
    updateAirportCivicAndSocialPublicPolicyInfraApp(inputAirportCivicAndSocialPublicPolicyInfraApp){
        this.setState({airportCivicAndSocialPublicPolicyInfraApp:inputAirportCivicAndSocialPublicPolicyInfraApp});
    }
    updateAirportCivicAndSocialPublicPolicyInfraAssistance(inputAirportCivicAndSocialPublicPolicyInfraAssistance){
        this.setState({airportCivicAndSocialPublicPolicyInfraAssistance:inputAirportCivicAndSocialPublicPolicyInfraAssistance});
    }
    updateAirportCivicAndSocialPublicPolicyInfraDigitalTwin(inputAirportCivicAndSocialPublicPolicyInfraDigitalTwin){
        this.setState({airportCivicAndSocialPublicPolicyInfraDigitalTwin:inputAirportCivicAndSocialPublicPolicyInfraDigitalTwin});
    }
    updateAirportCivicAndSocialPublicPolicyInfraAnnualReport(inputAirportCivicAndSocialPublicPolicyInfraAnnualReport){
        this.setState({airportCivicAndSocialPublicPolicyInfraAnnualReport:inputAirportCivicAndSocialPublicPolicyInfraAnnualReport});
    }

    updateAirportHealthAndWellBeingHealthSafety(inputAirportHealthAndWellBeingHealthSafety){
        this.setState({airportHealthAndWellBeingHealthSafety:inputAirportHealthAndWellBeingHealthSafety});
    }
    updateAirportHealthAndWellBeingDigitalServicesEducation(inputAirportHealthAndWellBeingDigitalServicesEducation){
        this.setState({airportHealthAndWellBeingDigitalServicesEducation:inputAirportHealthAndWellBeingDigitalServicesEducation});
    }
    updateAirportHealthAndWellBeingWasteManagement(inputAirportHealthAndWellBeingWasteManagement){
        this.setState({airportHealthAndWellBeingWasteManagement:inputAirportHealthAndWellBeingWasteManagement});
    }
    updateAirportHealthAndWellBeingCarbon(inputAirportHealthAndWellBeingCarbon){
        this.setState({airportHealthAndWellBeingCarbon:inputAirportHealthAndWellBeingCarbon});
    }

    updateAirportBusinessEnvironmentDigitalPayments(inputAirportBusinessEnvironmentDigitalPayments){
        this.setState({airportBusinessEnvironmentDigitalPayments:inputAirportBusinessEnvironmentDigitalPayments});
    }

    updateAirportTransportationDigitalTicketing(inputAirportTransportationDigitalTicketing){
        this.setState({airportTransportationDigitalTicketing:inputAirportTransportationDigitalTicketing});
    }
    updateAirportTransportationDigitalBiometrics(inputAirportTransportationDigitalBiometrics){
        this.setState({airportTransportationDigitalBiometrics:inputAirportTransportationDigitalBiometrics});
    }
    updateAirportTransportationDigitalCheckIn(inputAirportTransportationDigitalCheckIn){
        this.setState({airportTransportationDigitalCheckIn:inputAirportTransportationDigitalCheckIn});
    }
    updateAirportTransportationDigitalBaggage(inputAirportTransportationDigitalBaggage){
        this.setState({airportTransportationDigitalBaggage:inputAirportTransportationDigitalBaggage});
    }
    updateAirportTransportationTransportMetro(inputAirportTransportationTransportMetro){
        this.setState({airportTransportationTransportMetro:inputAirportTransportationTransportMetro});
    }
    updateAirportTransportationTransportBus(inputAirportTransportationTransportBus){
        this.setState({airportTransportationTransportBus:inputAirportTransportationTransportBus});
    }
    updateAirportTransportationTransportCarPark(inputAirportTransportationTransportCarPark){
        this.setState({airportTransportationTransportCarPark:inputAirportTransportationTransportCarPark});
    }
    updateAirportTransportationTransportCab(inputAirportTransportationTransportCab){
        this.setState({airportTransportationTransportCab:inputAirportTransportationTransportCab});
    }
    updateAirportTransportationCustomerCentricness(inputAirportTransportationCustomerCentricness){
        this.setState({airportTransportationCustomerCentricness:inputAirportTransportationCustomerCentricness});
    }
    updateAirportTransportationTraffficArrivals(inputAirportTransportationTraffficArrivals){
        this.setState({airportTransportationTraffficArrivals:inputAirportTransportationTraffficArrivals});
    }
    
    updateAirportInfrastructureEntertainment(inputAirportInfrastructureEntertainment){
        this.setState({airportInfrastructureEntertainment:inputAirportInfrastructureEntertainment});
    }
    updateAirportInfrastructureRenewableCarbon(inputAirportInfrastructureRenewableCarbon){
        this.setState({airportInfrastructureRenewableCarbon:inputAirportInfrastructureRenewableCarbon});
    }
    updateAirportInfrastructureRenewableSAF(inputAirportInfrastructureRenewableSAF){
        this.setState({airportInfrastructureRenewableSAF:inputAirportInfrastructureRenewableSAF});
    }
    updateAirportInfrastructureRenewableEnergyDesign(inputAirportInfrastructureRenewableEnergyDesign){
        this.setState({airportInfrastructureRenewableEnergyDesign:inputAirportInfrastructureRenewableEnergyDesign});
    }
    updateAirportInfrastructureMegastructure(inputAirportInfrastructureMegastructure){
        this.setState({airportInfrastructureMegastructure:inputAirportInfrastructureMegastructure});
    }
    updateAirportInfrastructureCitizenUsage(inputAirportInfrastructureCitizenUsage){
        this.setState({airportInfrastructureCitizenUsage:inputAirportInfrastructureCitizenUsage});
    }
    


    updateTownshipCivicAndSocialTourism(inputTownshipCivicAndSocialTourism){
        this.setState({townshipCivicAndSocialTourism:inputTownshipCivicAndSocialTourism});
    }
    updateTownshipCivicAndSocialUtilitiesInternet(inputTownshipCivicAndSocialUtilitiesInternet){
        this.setState({townshipCivicAndSocialUtilitiesInternet:inputTownshipCivicAndSocialUtilitiesInternet});
    }
    updateTownshipCivicAndSocialUtilitiesWater(inputTownshipCivicAndSocialUtilitiesWater){
        this.setState({townshipCivicAndSocialUtilitiesWater:inputTownshipCivicAndSocialUtilitiesWater});
    }
    updateTownshipCivicAndSocialUtilitiesSanitation(inputTownshipCivicAndSocialUtilitiesSanitation){
        this.setState({townshipCivicAndSocialUtilitiesSanitation:inputTownshipCivicAndSocialUtilitiesSanitation});
    }
    updateTownshipCivicAndSocialUtilitiesEnergy(inputTownshipCivicAndSocialUtilitiesEnergy){
        this.setState({townshipCivicAndSocialUtilitiesEnergy:inputTownshipCivicAndSocialUtilitiesEnergy});
    }
    updateTownshipCivicAndSocialSecurity(inputTownshipCivicAndSocialSecurity){
        this.setState({townshipCivicAndSocialSecurity:inputTownshipCivicAndSocialSecurity});
    }
    updateTownshipCivicAndSocialPublicPolicyInfraWebApp(inputTownshipCivicAndSocialPublicPolicyInfraWebApp){
        this.setState({townshipCivicAndSocialPublicPolicyInfraWebApp:inputTownshipCivicAndSocialPublicPolicyInfraWebApp});
    }
    updateTownshipCivicAndSocialPublicPolicyInfraCharterHealthEdu(inputTownshipCivicAndSocialPublicPolicyInfraCharterHealthEdu){
        this.setState({townshipCivicAndSocialPublicPolicyInfraCharterHealthEdu:inputTownshipCivicAndSocialPublicPolicyInfraCharterHealthEdu});
    }
    updateTownshipCivicAndSocialPublicPolicyInfraCharterTax(inputTownshipCivicAndSocialPublicPolicyInfraCharterTax){
        this.setState({townshipCivicAndSocialPublicPolicyInfraCharterTax:inputTownshipCivicAndSocialPublicPolicyInfraCharterTax});
    }
    updateTownshipCivicAndSocialPublicPolicyInfraCharterHousing(inputTownshipCivicAndSocialPublicPolicyInfraCharterHousing){
        this.setState({townshipCivicAndSocialPublicPolicyInfraCharterHousing:inputTownshipCivicAndSocialPublicPolicyInfraCharterHousing});
    }
    updateTownshipCivicAndSocialPublicPolicyInfraDoc(inputTownshipCivicAndSocialPublicPolicyInfraDoc){
        this.setState({townshipCivicAndSocialPublicPolicyInfraDoc:inputTownshipCivicAndSocialPublicPolicyInfraDoc});
    }

    updateTownshipHealthAndWellBeingHospital(inputTownshipHealthAndWellBeingHospital){
        this.setState({townshipHealthAndWellBeingHospital:inputTownshipHealthAndWellBeingHospital});
    }
    updateTownshipHealthAndWellBeingDigital(inputTownshipHealthAndWellBeingDigital){
        this.setState({townshipHealthAndWellBeingDigital:inputTownshipHealthAndWellBeingDigital});
    }
    updateTownshipHealthAndWellBeingWasteManagement(inputTownshipHealthAndWellBeingWasteManagement){
        this.setState({townshipHealthAndWellBeingWasteManagement:inputTownshipHealthAndWellBeingWasteManagement});
    }
    updateTownshipHealthAndWellBeingEnvironmental(inputTownshipHealthAndWellBeingEnvironmental){
        this.setState({townshipHealthAndWellBeingEnvironmental:inputTownshipHealthAndWellBeingEnvironmental});
    }

    updateTownshipBusinessEnvironmentInnovation(inputTownshipBusinessEnvironmentInnovation){
        this.setState({townshipBusinessEnvironmentInnovation:inputTownshipBusinessEnvironmentInnovation});
    }
    updateTownshipBusinessEnvironmentDigital(inputTownshipBusinessEnvironmentDigital){
        this.setState({townshipBusinessEnvironmentDigital:inputTownshipBusinessEnvironmentDigital});
    }
    updateTownshipBusinessEnvironmentMSME(inputTownshipBusinessEnvironmentMSME){
        this.setState({townshipBusinessEnvironmentMSME:inputTownshipBusinessEnvironmentMSME});
    }

    updateTownshipTransportationDigitalPayment(inputTownshipTransportationDigitalPayment){
        this.setState({townshipTransportationDigitalPayment:inputTownshipTransportationDigitalPayment});
    }
    updateTownshipTransportationDigitalSchedule(inputTownshipTransportationDigitalSchedule){
        this.setState({townshipTransportationDigitalSchedule:inputTownshipTransportationDigitalSchedule});
    }
    updateTownshipTransportationDigitalCabApp(inputTownshipTransportationDigitalCabApp){
        this.setState({townshipTransportationDigitalCabApp:inputTownshipTransportationDigitalCabApp});
    }
    updateTownshipTransportationDigitalSafety(inputTownshipTransportationDigitalSafety){
        this.setState({townshipTransportationDigitalSafety:inputTownshipTransportationDigitalSafety});
    }
    updateTownshipTransportationTransportRail(inputTownshipTransportationTransportRail){
        this.setState({townshipTransportationTransportRail:inputTownshipTransportationTransportRail});
    }
    updateTownshipTransportationTransportBus(inputTownshipTransportationTransportBus){
        this.setState({townshipTransportationTransportBus:inputTownshipTransportationTransportBus});
    }
    updateTownshipTransportationTransportTuk(inputTownshipTransportationTransportTuk){
        this.setState({townshipTransportationTransportTuk:inputTownshipTransportationTransportTuk});
    }
    updateTownshipTransportationTransportCycle(inputTownshipTransportationTransportCycle){
        this.setState({townshipTransportationTransportCycle:inputTownshipTransportationTransportCycle});
    }
    updateTownshipTransportationCustomerCentricness(inputTownshipTransportationCustomerCentricness){
        this.setState({townshipTransportationCustomerCentricness:inputTownshipTransportationCustomerCentricness});
    }
    updateTownshipTransportationTrafffic(inputTownshipTransportationTrafffic){
        this.setState({townshipTransportationTrafffic:inputTownshipTransportationTrafffic});
    }

    updateTownshipInfrastructureEntertainment(inputTownshipInfrastructureEntertainment){
        this.setState({townshipInfrastructureEntertainment:inputTownshipInfrastructureEntertainment});
    }
    updateTownshipInfrastructureRenewable(inputTownshipInfrastructureRenewable){
        this.setState({townshipInfrastructureRenewable:inputTownshipInfrastructureRenewable});
    }
    updateTownshipInfrastructureMegastructure(inputTownshipInfrastructureMegastructure){
        this.setState({townshipInfrastructureMegastructure:inputTownshipInfrastructureMegastructure});
    }
    updateTownshipInfrastructureCitizenUsage(inputTownshipInfrastructureCitizenUsage){
        this.setState({townshipInfrastructureCitizenUsage:inputTownshipInfrastructureCitizenUsage});
    }

        
    moveToNextStep = (event,nextStep) => {
        event.preventDefault();
        this.setState({
            currentStep : nextStep
        })
    }

    generateAirportCivilAndSocialScores = () => {
        
        var airportRankStr = this.state.airportCivicAndSocialTourism
        var airportRank = Number(airportRankStr)
        var airportTourismScoreVar=0
        if (airportRank>=1 && airportRank<=10)
            airportTourismScoreVar=10
        else if (airportRank>=11 && airportRank<=20)
            airportTourismScoreVar=9
        else if (airportRank>=21 && airportRank<=30)
            airportTourismScoreVar=8
        else if (airportRank>=31 && airportRank<=40)
            airportTourismScoreVar=7
        else if (airportRank>=41 && airportRank<=50)
            airportTourismScoreVar=6
        else if (airportRank>=51 && airportRank<=60)
            airportTourismScoreVar=5
        else if (airportRank>=61 && airportRank<=70)
            airportTourismScoreVar=4
        else if (airportRank>=71 && airportRank<=80)
            airportTourismScoreVar=3        
        else if (airportRank>=81 && airportRank<=90)
            airportTourismScoreVar=2
        else if (airportRank>=91 && airportRank<=100)
            airportTourismScoreVar=1
        else if(airportRank>100 )
            airportTourismScoreVar=0      
        this.setState({
            airportCivicAndSocialTourismScore:airportTourismScoreVar
        })

        var airportSecurityRankStr = this.state.airportCivicAndSocialSecurity
        var airportSecurityRank = Number(airportSecurityRankStr)
        var airportSecurityScoreVar=0
        if (airportSecurityRank>=1 && airportSecurityRank<=10)
            airportSecurityScoreVar=10
        else if (airportSecurityRank>=11 && airportSecurityRank<=20)
            airportSecurityScoreVar=9
        else if (airportSecurityRank>=21 && airportSecurityRank<=30)
            airportSecurityScoreVar=8
        else if (airportSecurityRank>=31 && airportSecurityRank<=40)
            airportSecurityScoreVar=7
        else if (airportSecurityRank>=41 && airportSecurityRank<=50)
            airportSecurityScoreVar=6
        else if (airportSecurityRank>=51 && airportSecurityRank<=60)
            airportSecurityScoreVar=5
        else if (airportSecurityRank>=61 && airportSecurityRank<=70)
            airportSecurityScoreVar=4
        else if (airportSecurityRank>=71 && airportSecurityRank<=80)
            airportSecurityScoreVar=3        
        else if (airportSecurityRank>=81 && airportSecurityRank<=90)
            airportSecurityScoreVar=2
        else if (airportSecurityRank>=91 && airportSecurityRank<=100)
            airportSecurityScoreVar=1
        else if(airportSecurityRank>100 )
            airportSecurityScoreVar=0       
        this.setState({
            airportCivicAndSocialSecurityScore:airportSecurityScoreVar
        })

        var countairportPPC=0
        if(this.state.airportCivicAndSocialPublicPolicyInfraWebsite==="Yes")
            countairportPPC++;
        if(this.state.airportCivicAndSocialPublicPolicyInfraApp==="Yes")
            countairportPPC++;
        if(this.state.airportCivicAndSocialPublicPolicyInfraDigitalTwin==="Yes")
            countairportPPC++;
        if(this.state.airportCivicAndSocialPublicPolicyInfraAssistance==="Yes")
            countairportPPC++;
            if(this.state.airportCivicAndSocialPublicPolicyInfraAnnualReport==="Yes")
            countairportPPC++;
        countairportPPC*=2

        this.setState({
            airportCivicAndSocialPublicPolicyInfraScore : countairportPPC
        })

        var airportCivicAndSocialDomainSum = (airportTourismScoreVar + airportSecurityScoreVar + countairportPPC).toFixed(2)
        var airportCivicAndSocialDomainScore = ((airportTourismScoreVar + airportSecurityScoreVar + countairportPPC)*4/3).toFixed(2)
        this.setState({
            airportCivicAndSocialSum:airportCivicAndSocialDomainSum,
            airportCivicAndSocialScore:airportCivicAndSocialDomainScore
        })
        return airportCivicAndSocialDomainSum
    }

    generateAirportHealthAndWellBeingScores = () => {
        
        var airportSafety = this.state.airportHealthAndWellBeingHealthSafety
        var airportHealthAndWellBeingHealthSafetyScoreVar=0
        if (airportSafety === "Yes")
            airportHealthAndWellBeingHealthSafetyScoreVar = 10    
        this.setState({
            airportHealthAndWellBeingHealthSafetyScore : airportHealthAndWellBeingHealthSafetyScoreVar 
        })

        var airportDigital = this.state.airportHealthAndWellBeingDigitalServicesEducation
        var airportHealthAndWellBeingDigitalServicesEducationScoreVar=0
        if (airportDigital === "Yes")
            airportHealthAndWellBeingDigitalServicesEducationScoreVar = 10    
        this.setState({
            airportHealthAndWellBeingDigitalServicesEducationScore : airportHealthAndWellBeingDigitalServicesEducationScoreVar 
        })

        var airportWasteStr = this.state.airportHealthAndWellBeingWasteManagement
        var airportWaste = Number(airportWasteStr)
        var airportHealthAndWellBeingWasteManagementScoreVar=0
        if (airportWaste<=5)
            airportHealthAndWellBeingWasteManagementScoreVar=1
        else if (airportWaste>5 && airportWaste<=10)
            airportHealthAndWellBeingWasteManagementScoreVar=2
        else if (airportWaste>10 && airportWaste<=15)
            airportHealthAndWellBeingWasteManagementScoreVar=3
        else if (airportWaste>15 && airportWaste<=20)
            airportHealthAndWellBeingWasteManagementScoreVar=4
        else if (airportWaste>20 && airportWaste<=25)
            airportHealthAndWellBeingWasteManagementScoreVar=5
        else if (airportWaste>25 && airportWaste<=30)
            airportHealthAndWellBeingWasteManagementScoreVar=6
        else if (airportWaste>30 && airportWaste<=35)
            airportHealthAndWellBeingWasteManagementScoreVar=7
        else if (airportWaste>35 && airportWaste<=40)
            airportHealthAndWellBeingWasteManagementScoreVar=8        
        else if (airportWaste>40 && airportWaste<=45)
            airportHealthAndWellBeingWasteManagementScoreVar=9
        else if (airportWaste>45)
            airportHealthAndWellBeingWasteManagementScoreVar=10
        else
            airportHealthAndWellBeingWasteManagementScoreVar=0
            
        this.setState({
            airportHealthAndWellBeingWasteManagementScore:airportHealthAndWellBeingWasteManagementScoreVar
        })

        var airportEnv = this.state.airportHealthAndWellBeingCarbon
        var airportHealthAndWellBeingCarbonScoreVar=0
        
        if (airportEnv === "Not Accredited")
            airportHealthAndWellBeingCarbonScoreVar = 1
        else if (airportEnv === "Level 1 Mapping")
            airportHealthAndWellBeingCarbonScoreVar = 2
        else if (airportEnv === "Level 2 Reduction")
            airportHealthAndWellBeingCarbonScoreVar = 3
        else if (airportEnv === "Level 3 Optimization")
            airportHealthAndWellBeingCarbonScoreVar = 4
        else if (airportEnv === "Level 3+ Neutrality")
            airportHealthAndWellBeingCarbonScoreVar = 5
        else if (airportEnv === "Level 4 Transition")
            airportHealthAndWellBeingCarbonScoreVar = 6
        else if (airportEnv === "Level 4+ Transformation")
            airportHealthAndWellBeingCarbonScoreVar = 7
        else if (airportEnv === "Level 5 Net Zero")
            airportHealthAndWellBeingCarbonScoreVar = 8
            airportHealthAndWellBeingCarbonScoreVar*=1.25
        this.setState({
            airportHealthAndWellBeingCarbonScore : airportHealthAndWellBeingCarbonScoreVar 
        })

        var airportHealthAndWellBeingDomainScore = 
            airportHealthAndWellBeingHealthSafetyScoreVar + airportHealthAndWellBeingDigitalServicesEducationScoreVar
            + airportHealthAndWellBeingWasteManagementScoreVar + airportHealthAndWellBeingCarbonScoreVar
        
        airportHealthAndWellBeingDomainScore = airportHealthAndWellBeingDomainScore.toFixed(2)
        this.setState({
            airportHealthAndWellBeingSum:airportHealthAndWellBeingDomainScore,
            airportHealthAndWellBeingScore:airportHealthAndWellBeingDomainScore
        })
        return airportHealthAndWellBeingDomainScore
    }

    generateAirportBusinessEnvironmentScores = () => {
        
        var airportDigiPayStr = this.state.airportBusinessEnvironmentDigitalPayments
        var airportDigiPay = Number(airportDigiPayStr)
        var airportBusinessEnvironmentDigitalPaymentsScoreVar=0
        if (airportDigiPay>=4.5)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=10
        else if (airportDigiPay>=4 && airportDigiPay<4.5)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=9
        else if (airportDigiPay>=3.5 && airportDigiPay<4)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=8
        else if (airportDigiPay>=3 && airportDigiPay<3.5)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=7
        else if (airportDigiPay>=2.5 && airportDigiPay<3)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=6
        else if (airportDigiPay>=2 && airportDigiPay<2.5)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=5
        else if (airportDigiPay>=1.5 && airportDigiPay<2)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=4
        else if (airportDigiPay>=1 && airportDigiPay<1.5)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=3        
        else if (airportDigiPay>=0.5 && airportDigiPay<1)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=2
        else if (airportDigiPay>=0 && airportDigiPay<0.5)
            airportBusinessEnvironmentDigitalPaymentsScoreVar=1
        else
            airportBusinessEnvironmentDigitalPaymentsScoreVar=0
            
        this.setState({
            airportBusinessEnvironmentDigitalPaymentsScore:airportBusinessEnvironmentDigitalPaymentsScoreVar
        })

        
        var airportBusinessEnvironmentDigitalPaymentsDomainScore = ((airportBusinessEnvironmentDigitalPaymentsScoreVar)*4).toFixed(2)
        this.setState({
            airportBusinessEnvironmentDigitalPaymentsSum : airportBusinessEnvironmentDigitalPaymentsScoreVar,
            airportBusinessEnvironmentScore:airportBusinessEnvironmentDigitalPaymentsDomainScore
        })
        return airportBusinessEnvironmentDigitalPaymentsScoreVar
    }
    
    generateAirportTransportationScores = () => {
        
        var countAirportDigital=0
        if(this.state.airportTransportationDigitalTicketing==="Yes")
            countAirportDigital++;
        if(this.state.airportTransportationDigitalBiometrics==="Yes")
            countAirportDigital++;
        if(this.state.airportTransportationDigitalCheckIn==="Yes")
            countAirportDigital++;
        if(this.state.airportTransportationDigitalBaggage==="Yes")
            countAirportDigital++;
        countAirportDigital*=2.5
        this.setState({
            airportTransportationDigitalScore : countAirportDigital
        })

        var countAirportMM=0
        if(this.state.airportTransportationTransportMetro==="Yes")
            countAirportMM++;
        if(this.state.airportTransportationTransportBus==="Yes")
            countAirportMM++;
        if(this.state.airportTransportationTransportCarPark==="Yes")
            countAirportMM++;
        if(this.state.airportTransportationTransportCab==="Yes")
            countAirportMM++;
        countAirportMM*=2.5
        this.setState({
            airportTransportationTransportScore : countAirportMM
        })

        var airportCC = this.state.airportTransportationCustomerCentricness
        this.setState({
            airportTransportationCustomerCentricnessScore:airportCC
        })
        
        var airportArr = this.state.airportTransportationTraffficArrivals
        this.setState({
            airportTransportationTraffficScore:airportArr
        })
        

        var airportCivicAndSocialDomainScore = Number(countAirportDigital) + Number(countAirportMM) +Number(airportCC) + Number(airportArr)
        airportCivicAndSocialDomainScore = airportCivicAndSocialDomainScore.toFixed(2)
        this.setState({
            airportTransportationScore:airportCivicAndSocialDomainScore,
            airportTransportationSum:airportCivicAndSocialDomainScore
        })
        return airportCivicAndSocialDomainScore 
    }

    generateAirportInfrastructureScores = () => {
        
        var airportFNB = this.state.airportInfrastructureEntertainment
        airportFNB*=2
        airportFNB = airportFNB.toFixed(2)
        this.setState({
            airportInfrastructureEntertainmentScore:airportFNB
        })

        var airportInfrastructureRenewableCounter=0
        if(this.state.airportInfrastructureRenewableSAF==="Yes")
            airportInfrastructureRenewableCounter++;
        if(this.state.airportInfrastructureRenewableCarbon==="Yes")
            airportInfrastructureRenewableCounter++;
        if(this.state.airportInfrastructureRenewableEnergyDesign==="Yes")
            airportInfrastructureRenewableCounter++;
        airportInfrastructureRenewableCounter*=10/3
        airportInfrastructureRenewableCounter=airportInfrastructureRenewableCounter.toFixed(2)
        this.setState({
            airportInfrastructureRenewableScore:airportInfrastructureRenewableCounter
        })

        var airportMS = this.state.airportInfrastructureMegastructure
        var airportInfrastructureMegastructureScoreVar=0
        if (airportMS>=15.07 && airportMS<=19.55)
            airportInfrastructureMegastructureScoreVar=10
        else if ((airportMS>=14.09 && airportMS<=15.07) || (airportMS>=19.55 && airportMS<=22.5))
            airportInfrastructureMegastructureScoreVar=8
        else if ((airportMS>=10.46 && airportMS<=14.09) || (airportMS>=22.5 && airportMS<=24.18))
            airportInfrastructureMegastructureScoreVar=6
        else if ((airportMS>=7.87 && airportMS<=10.46) || (airportMS>=24.18 && airportMS<=26.54))
            airportInfrastructureMegastructureScoreVar=4
        else if ((airportMS<7.87 )|| (airportMS>26.54))
            airportInfrastructureMegastructureScoreVar=2
        else
            airportInfrastructureMegastructureScoreVar=0

        this.setState({
            airportInfrastructureMegastructureScore : airportInfrastructureMegastructureScoreVar
        })

        var airportComfort = this.state.airportInfrastructureCitizenUsage
        airportComfort*=2
        airportComfort=airportComfort.toFixed(2)
        this.setState({
            airportInfrastructureCitizenUsageScore : airportComfort
        })      

        var airportInfraDomainScoreVar =  Number(airportFNB) + Number(airportInfrastructureRenewableCounter) + Number(airportInfrastructureMegastructureScoreVar) + Number(airportComfort)
        airportInfraDomainScoreVar = airportInfraDomainScoreVar.toFixed(2)
        this.setState({
            airportInfrastructureScore:airportInfraDomainScoreVar,
            airportInfrastructureSum:airportInfraDomainScoreVar
        })
        return airportInfraDomainScoreVar
    }

    generateAirportScore = (event,nextStep) =>{
        event.preventDefault();

        this.setState({
            isLoading : true
        });

        //generate Civic & Social Score
        var airportCivicAndSocialSum = this.generateAirportCivilAndSocialScores()
        var airportHealthAndWellBeingSum = this.generateAirportHealthAndWellBeingScores()
        var airportBusinessEnvironmentSum = this.generateAirportBusinessEnvironmentScores()
        var airportTransportationSum = this.generateAirportTransportationScores()
        var airportInfrastructureSum = this.generateAirportInfrastructureScores()
        
        var overallScoreVar = Number(airportCivicAndSocialSum) + Number(airportHealthAndWellBeingSum) + Number(airportBusinessEnvironmentSum) + Number(airportTransportationSum)
    + Number(airportInfrastructureSum)

         overallScoreVar/=1.6
        overallScoreVar=overallScoreVar.toFixed(2)
        
        this.setState({
            airportOverallScore : overallScoreVar
        });

        this.setState({
            currentStep : nextStep,
            isLoading : false
        });

    }
    
    airportbackToHome = (event,nextStep) => {
        this.setState({
            isLoading : true
        });

        this.setState({
            //Airport Sector, Civic&Social Domain proxies 
            airportCivicAndSocialTourism :"",
            airportCivicAndSocialSecurity:"",
            airportCivicAndSocialPublicPolicyInfraWebsite:"",
            airportCivicAndSocialPublicPolicyInfraApp:"",
            airportCivicAndSocialPublicPolicyInfraAssistance:"",
            airportCivicAndSocialPublicPolicyInfraDigitalTwin:"",
            airportCivicAndSocialPublicPolicyInfraAnnualReport:"",
            
            //Airport Sector, Health & Well Being Domain proxies
            airportHealthAndWellBeingHealthSafety:"",
            airportHealthAndWellBeingDigitalServicesEducation:"",
            airportHealthAndWellBeingWasteManagement:"",
            airportHealthAndWellBeingCarbon:"",

            //Airport Sector, Health & Well Being Domain proxies
            airportBusinessEnvironmentDigitalPayments:"",

            //Airport Sector, Transportation Domain proxies
            airportTransportationDigitalTicketing:"",
            airportTransportationDigitalBiometrics:"",
            airportTransportationDigitalCheckIn:"",
            airportTransportationDigitalBaggage:"",
            airportTransportationTransportMetro:"",
            airportTransportationTransportBus:"",
            airportTransportationTransportCarPark:"",
            airportTransportationTransportCab:"",
            airportTransportationCustomerCentricness:"",
            airportTransportationTraffficArrivals:"",
            
            //Airport Sector, Infrastructure Domain proxies
            airportInfrastructureEntertainment:"",
            airportInfrastructureRenewableSAF:"",
            airportInfrastructureRenewableCarbon:"",
            airportInfrastructureRenewableEnergyDesign:"",
            airportInfrastructureMegastructure:"",
            airportInfrastructureCitizenUsage:"",
            
            //Airport Sector, Civic&Social Domain Parameter Score
            airportCivicAndSocialTourismScore :"",
            airportCivicAndSocialSecurityScore:"",
            airportCivicAndSocialPublicPolicyInfraScore:"",
            
            //Airport Sector, Health & Well Being Domain Parameter Score
            airportHealthAndWellBeingHealthSafetyScore:"",
            airportHealthAndWellBeingDigitalServicesEducationScore:"",
            airportHealthAndWellBeingWasteManagementScore:"",
            airportHealthAndWellBeingCarbonScore:"",

            //Airport Sector, Health & Well Being Domain Parameter Score
            airportBusinessEnvironmentDigitalPaymentsScore:"",

            //Airport Sector, Transportation Domain Parameter Score
            airportTransportationDigitalScore:"",
            airportTransportationTransportScore:"",
            airportTransportationCustomerCentricnessScore:"",
            airportTransportationTraffficScore:"",
            
            //Airport Sector, Infrastructure Domain Parameter Score
            airportInfrastructureEntertainmentScore:"",
            airportInfrastructureRenewableScore:"",
            airportInfrastructureMegastructureScore:"",
            airportInfrastructureCitizenUsageScore:"",

            //Airport Sector, Civic&Social Domain Score
            airportCivicAndSocialScore :"",
            airportCivicAndSocialSum : "",
            
            //Airport Sector, Health & Well Being Domain Score
            airportHealthAndWellBeingScore:"",
            airportHealthAndWellBeingSum:"",
            
            //Airport Sector, Health & Well Being Domain Score
            airportBusinessEnvironmentScore:"",
            airportBusinessEnvironmentSum:"",

            //Airport Sector, Transportation Domain Score
            airportTransportationScore:"",
            airportTransportationSum:"",
            
            //Airport Sector, Infrastructure Domain Score
            airportInfrastructureScore:"",
            airportInfrastructureSum:"",
            
            //Airport Sector Score
            airportOverallScore:"",
        })

        this.setState({
            nslWindowView : "startEvaluation",
            cityName:"",
            sectorName:"",
            currentStep : 1
        })

        this.setState({
            isLoading : false
        });
    }

    
    generateTownshipCivilAndSocialScores = () => {
        
        var townshipRankStr = this.state.townshipCivicAndSocialTourism
        var townshipRank = Number(townshipRankStr)
        var townshipTourismScoreVar=0
        if (townshipRank<1 )
            townshipTourismScoreVar=0
        else if (townshipRank>=1 && townshipRank<5)
            townshipTourismScoreVar=1
        else if (townshipRank>=5 && townshipRank<10)
            townshipTourismScoreVar=2
        else if (townshipRank>=10 && townshipRank<20)
            townshipTourismScoreVar=3
        else if (townshipRank>=20 && townshipRank<35)
            townshipTourismScoreVar=4
        else if (townshipRank>=35 && townshipRank<50)
            townshipTourismScoreVar=5
        else if (townshipRank>=50 && townshipRank<75)
            townshipTourismScoreVar=6
        else if (townshipRank>=75 && townshipRank<100)
            townshipTourismScoreVar=7        
        else if (townshipRank>=100 && townshipRank<200)
            townshipTourismScoreVar=8
        else if (townshipRank>=200 && townshipRank<300)
            townshipTourismScoreVar=9
        else if(townshipRank>=300 )
            townshipTourismScoreVar=10      
        this.setState({
            townshipCivicAndSocialTourismScore:townshipTourismScoreVar
        })
        
        var townshipUtilitiesInternetStr = this.state.townshipCivicAndSocialUtilitiesInternet
        var townshipUtilitiesInternetRank = Number(townshipUtilitiesInternetStr)
        var townshipUtilitiesInternetRankVar=0
        if (townshipUtilitiesInternetRank>=1 && townshipUtilitiesInternetRank<=10)
            townshipUtilitiesInternetRankVar=1
        else if (townshipUtilitiesInternetRank>=11 && townshipUtilitiesInternetRank<=20)
            townshipUtilitiesInternetRankVar=2
        else if (townshipUtilitiesInternetRank>=21 && townshipUtilitiesInternetRank<=30)
            townshipUtilitiesInternetRankVar=3
        else if (townshipUtilitiesInternetRank>=31 && townshipUtilitiesInternetRank<=40)
            townshipUtilitiesInternetRankVar=4
        else if (townshipUtilitiesInternetRank>=41 && townshipUtilitiesInternetRank<=50)
            townshipUtilitiesInternetRankVar=5
        else if (townshipUtilitiesInternetRank>=51 && townshipUtilitiesInternetRank<=60)
            townshipUtilitiesInternetRankVar=6
        else if (townshipUtilitiesInternetRank>=61 && townshipUtilitiesInternetRank<=70)
            townshipUtilitiesInternetRankVar=7
        else if (townshipUtilitiesInternetRank>=71 && townshipUtilitiesInternetRank<=80)
            townshipUtilitiesInternetRankVar=8        
        else if (townshipUtilitiesInternetRank>=81 && townshipUtilitiesInternetRank<=90)
            townshipUtilitiesInternetRankVar=9
        else if (townshipUtilitiesInternetRank>=91 && townshipUtilitiesInternetRank<=100)
            townshipUtilitiesInternetRankVar=10
        
        var townshipUtilitiesWaterStr = this.state.townshipCivicAndSocialUtilitiesWater
        var townshipUtilitiesWaterRank = Number(townshipUtilitiesWaterStr)
        var townshipUtilitiesWaterRankVar=0
        if (townshipUtilitiesWaterRank>=1 && townshipUtilitiesWaterRank<=10)
            townshipUtilitiesWaterRankVar=1
        else if (townshipUtilitiesWaterRank>=11 && townshipUtilitiesWaterRank<=20)
            townshipUtilitiesWaterRankVar=2
        else if (townshipUtilitiesWaterRank>=21 && townshipUtilitiesWaterRank<=30)
            townshipUtilitiesWaterRankVar=3
        else if (townshipUtilitiesWaterRank>=31 && townshipUtilitiesWaterRank<=40)
            townshipUtilitiesWaterRankVar=4
        else if (townshipUtilitiesWaterRank>=41 && townshipUtilitiesWaterRank<=50)
            townshipUtilitiesWaterRankVar=5
        else if (townshipUtilitiesWaterRank>=51 && townshipUtilitiesWaterRank<=60)
            townshipUtilitiesWaterRankVar=6
        else if (townshipUtilitiesWaterRank>=61 && townshipUtilitiesWaterRank<=70)
            townshipUtilitiesWaterRankVar=7
        else if (townshipUtilitiesWaterRank>=71 && townshipUtilitiesWaterRank<=80)
            townshipUtilitiesWaterRankVar=8        
        else if (townshipUtilitiesWaterRank>=81 && townshipUtilitiesWaterRank<=90)
            townshipUtilitiesWaterRankVar=9
        else if (townshipUtilitiesWaterRank>=91 && townshipUtilitiesWaterRank<=100)
            townshipUtilitiesWaterRankVar=10
        
        var townshipUtilitiesSanitationStr = this.state.townshipCivicAndSocialUtilitiesSanitation
        var townshipUtilitiesSanitationRank = Number(townshipUtilitiesSanitationStr)
        var townshipUtilitiesSanitationRankVar=0
        if (townshipUtilitiesSanitationRank>=1 && townshipUtilitiesSanitationRank<=10)
            townshipUtilitiesSanitationRankVar=1
        else if (townshipUtilitiesSanitationRank>=11 && townshipUtilitiesSanitationRank<=20)
            townshipUtilitiesSanitationRankVar=2
        else if (townshipUtilitiesSanitationRank>=21 && townshipUtilitiesSanitationRank<=30)
            townshipUtilitiesSanitationRankVar=3
        else if (townshipUtilitiesSanitationRank>=31 && townshipUtilitiesSanitationRank<=40)
            townshipUtilitiesSanitationRankVar=4
        else if (townshipUtilitiesSanitationRank>=41 && townshipUtilitiesSanitationRank<=50)
            townshipUtilitiesSanitationRankVar=5
        else if (townshipUtilitiesSanitationRank>=51 && townshipUtilitiesSanitationRank<=60)
            townshipUtilitiesSanitationRankVar=6
        else if (townshipUtilitiesSanitationRank>=61 && townshipUtilitiesSanitationRank<=70)
            townshipUtilitiesSanitationRankVar=7
        else if (townshipUtilitiesSanitationRank>=71 && townshipUtilitiesSanitationRank<=80)
            townshipUtilitiesSanitationRankVar=8        
        else if (townshipUtilitiesSanitationRank>=81 && townshipUtilitiesSanitationRank<=90)
            townshipUtilitiesSanitationRankVar=9
        else if (townshipUtilitiesSanitationRank>=91 && townshipUtilitiesSanitationRank<=100)
            townshipUtilitiesSanitationRankVar=10
        
        var townshipEnergyStr = this.state.townshipCivicAndSocialUtilitiesEnergy
        var townshipEnergyRank = Number(townshipEnergyStr)
        var townshipEnergyScoreVar=0
        if (townshipEnergyRank<1 )
            townshipEnergyScoreVar=0
        else if (townshipEnergyRank>=0 && townshipEnergyRank<1)
            townshipEnergyScoreVar=0
        else if (townshipEnergyRank>=1 && townshipEnergyRank<2.5)
            townshipEnergyScoreVar=1
        else if (townshipEnergyRank>=2.5 && townshipEnergyRank<5)
            townshipEnergyScoreVar=2
        else if (townshipEnergyRank>=5 && townshipEnergyRank<10)
            townshipEnergyScoreVar=3
        else if (townshipEnergyRank>=10 && townshipEnergyRank<20)
            townshipEnergyScoreVar=4
        else if (townshipEnergyRank>=20 && townshipEnergyRank<40)
            townshipEnergyScoreVar=5
        else if (townshipEnergyRank>=40 && townshipEnergyRank<60)
            townshipEnergyScoreVar=6        
        else if (townshipEnergyRank>=60 && townshipEnergyRank<100)
            townshipEnergyScoreVar=7
        else if (townshipEnergyRank>=100 && townshipEnergyRank<200)
            townshipEnergyScoreVar=8
        else if (townshipEnergyRank>=200 && townshipEnergyRank<400)
            townshipEnergyScoreVar=9
        else if(townshipEnergyRank>=400 )
            townshipEnergyScoreVar=10
        
        
        var townshipCivicAndSocialUtilitiesScoreVar = (townshipUtilitiesInternetRankVar + townshipUtilitiesWaterRankVar +townshipUtilitiesSanitationRankVar + townshipEnergyScoreVar)/4
        townshipCivicAndSocialUtilitiesScoreVar=townshipCivicAndSocialUtilitiesScoreVar.toFixed(2)
        this.setState({
            townshipCivicAndSocialUtilitiesScore:townshipCivicAndSocialUtilitiesScoreVar
        })
        
        var townshipSecurityRankStr = this.state.townshipCivicAndSocialSecurity
        var townshipSecurityRank = Number(townshipSecurityRankStr)
        var townshipSecurityScoreVar=0
        if (townshipSecurityRank>=0 && townshipSecurityRank<0.5)
            townshipSecurityScoreVar=0
        else if (townshipSecurityRank>=0.5 && townshipSecurityRank<1)
            townshipSecurityScoreVar=1
        else if (townshipSecurityRank>=1 && townshipSecurityRank<2)
            townshipSecurityScoreVar=2
        else if (townshipSecurityRank>=2 && townshipSecurityRank<3)
            townshipSecurityScoreVar=3
        else if (townshipSecurityRank>=3 && townshipSecurityRank<5)
            townshipSecurityScoreVar=4
        else if (townshipSecurityRank>=5 && townshipSecurityRank<10)
            townshipSecurityScoreVar=5
        else if (townshipSecurityRank>=10 && townshipSecurityRank<20)
            townshipSecurityScoreVar=6
        else if (townshipSecurityRank>=20 && townshipSecurityRank<30)
            townshipSecurityScoreVar=7        
        else if (townshipSecurityRank>=30 && townshipSecurityRank<50)
            townshipSecurityScoreVar=8
        else if (townshipSecurityRank>=50 && townshipSecurityRank<100)
            townshipSecurityScoreVar=9
        else if(townshipSecurityRank>100 )
            townshipSecurityScoreVar=10       
        this.setState({
            townshipCivicAndSocialSecurityScore:townshipSecurityScoreVar
        })
        
        var counttownshipPPC=0
        if(this.state.townshipCivicAndSocialPublicPolicyInfraWebApp==="Yes")
            counttownshipPPC++;
        if(this.state.townshipCivicAndSocialPublicPolicyInfraCharterHealthEdu==="Yes")
            counttownshipPPC++;
        if(this.state.townshipCivicAndSocialPublicPolicyInfraCharterTax==="Yes")
            counttownshipPPC++;
        if(this.state.townshipCivicAndSocialPublicPolicyInfraCharterHousing==="Yes")
            counttownshipPPC++;
        if(this.state.townshipCivicAndSocialPublicPolicyInfraDoc==="Yes")
            counttownshipPPC++;
        counttownshipPPC*=2

        this.setState({
            townshipCivicAndSocialPublicPolicyInfraScore : counttownshipPPC
        })
        
        var townshipCivicAndSocialDomainSumVar = Number(townshipTourismScoreVar) + Number(townshipCivicAndSocialUtilitiesScoreVar) + Number(townshipSecurityScoreVar) + Number(counttownshipPPC)
        townshipCivicAndSocialDomainSumVar=townshipCivicAndSocialDomainSumVar.toFixed(2)
        this.setState({
            townshipCivicAndSocialSum:townshipCivicAndSocialDomainSumVar,
            townshipCivicAndSocialScore:townshipCivicAndSocialDomainSumVar
        })
        return townshipCivicAndSocialDomainSumVar
    }

    generateTownshipHealthAndWellBeingScores = () => {
        
        var townshipSafetyStr = this.state.townshipHealthAndWellBeingHospital
        var townshipSafety = Number(townshipSafetyStr)
        var townshipHealthAndWellBeingHealthSafetyScoreVar=0
        if (townshipSafety>=0 && townshipSafety<2)
            townshipHealthAndWellBeingHealthSafetyScoreVar=1
        else if (townshipSafety>=2 && townshipSafety<4)
            townshipHealthAndWellBeingHealthSafetyScoreVar=2
        else if (townshipSafety>=4 && townshipSafety<6)
            townshipHealthAndWellBeingHealthSafetyScoreVar=3
        else if (townshipSafety>=6 && townshipSafety<8)
            townshipHealthAndWellBeingHealthSafetyScoreVar=4
        else if (townshipSafety>=8 && townshipSafety<10)
            townshipHealthAndWellBeingHealthSafetyScoreVar=5
        else if (townshipSafety>=10 && townshipSafety<12)
            townshipHealthAndWellBeingHealthSafetyScoreVar=6
        else if (townshipSafety>=12 && townshipSafety<14)
            townshipHealthAndWellBeingHealthSafetyScoreVar=7
        else if (townshipSafety>=14 && townshipSafety<16)
            townshipHealthAndWellBeingHealthSafetyScoreVar=8        
        else if (townshipSafety>=16 && townshipSafety<18)
            townshipHealthAndWellBeingHealthSafetyScoreVar=9
        else if (townshipSafety>=18 &&  townshipSafety<20)
            townshipHealthAndWellBeingHealthSafetyScoreVar=10
        else
            townshipHealthAndWellBeingHealthSafetyScoreVar=10
        this.setState({
            townshipHealthAndWellBeingHospitalScore : townshipHealthAndWellBeingHealthSafetyScoreVar 
        })
        
        var townshipDigitalStr = this.state.townshipHealthAndWellBeingDigital
        var townshipHealthAndWellBeingDigitalInternetPercentage= Number(townshipDigitalStr)
        var townshipHealthAndWellBeingDigitalScoreVar= 0
        if (townshipHealthAndWellBeingDigitalInternetPercentage>=0 && townshipHealthAndWellBeingDigitalInternetPercentage<10)
            townshipHealthAndWellBeingDigitalScoreVar=1
        else if (townshipHealthAndWellBeingDigitalInternetPercentage>=10 && townshipHealthAndWellBeingDigitalInternetPercentage<20)
            townshipHealthAndWellBeingDigitalScoreVar=2
        else if (townshipHealthAndWellBeingDigitalInternetPercentage>=20 && townshipHealthAndWellBeingDigitalInternetPercentage<30)
            townshipHealthAndWellBeingDigitalScoreVar=3
        else if (townshipHealthAndWellBeingDigitalInternetPercentage>=30 && townshipHealthAndWellBeingDigitalInternetPercentage<40)
            townshipHealthAndWellBeingDigitalScoreVar=4
        else if (townshipHealthAndWellBeingDigitalInternetPercentage>=40 && townshipHealthAndWellBeingDigitalInternetPercentage<50)
            townshipHealthAndWellBeingDigitalScoreVar=5
        else if (townshipHealthAndWellBeingDigitalInternetPercentage>=50 && townshipHealthAndWellBeingDigitalInternetPercentage<60)
            townshipHealthAndWellBeingDigitalScoreVar=6
        else if (townshipHealthAndWellBeingDigitalInternetPercentage>=60 && townshipHealthAndWellBeingDigitalInternetPercentage<70)
            townshipHealthAndWellBeingDigitalScoreVar=7
        else if (townshipHealthAndWellBeingDigitalInternetPercentage>=70 && townshipHealthAndWellBeingDigitalInternetPercentage<80)
            townshipHealthAndWellBeingDigitalScoreVar=8        
        else if (townshipHealthAndWellBeingDigitalInternetPercentage>=80 && townshipHealthAndWellBeingDigitalInternetPercentage<90)
            townshipHealthAndWellBeingDigitalScoreVar=9
        else if (townshipHealthAndWellBeingDigitalInternetPercentage>=90 &&  townshipHealthAndWellBeingDigitalInternetPercentage<=100)
            townshipHealthAndWellBeingDigitalScoreVar=10
        else
            townshipHealthAndWellBeingDigitalScoreVar=0
        this.setState({
            townshipHealthAndWellBeingDigitalScore : townshipHealthAndWellBeingDigitalScoreVar 
        })
        
        var townshipWasteStr = this.state.townshipHealthAndWellBeingWasteManagement
        var townshipWaste = Number(townshipWasteStr)
        var townshipHealthAndWellBeingWasteManagementScoreVar=0
        if (townshipWaste>=0 && townshipWaste<10)
            townshipHealthAndWellBeingWasteManagementScoreVar=10
        else if (townshipWaste>=10 && townshipWaste<20)
            townshipHealthAndWellBeingWasteManagementScoreVar=9
        else if (townshipWaste>=20 && townshipWaste<30)
            townshipHealthAndWellBeingWasteManagementScoreVar=8
        else if (townshipWaste>=30 && townshipWaste<40)
            townshipHealthAndWellBeingWasteManagementScoreVar=7
        else if (townshipWaste>=40 && townshipWaste<50)
            townshipHealthAndWellBeingWasteManagementScoreVar=6
        else if (townshipWaste>=50 && townshipWaste<60)
            townshipHealthAndWellBeingWasteManagementScoreVar=5
        else if (townshipWaste>=60 && townshipWaste<70)
            townshipHealthAndWellBeingWasteManagementScoreVar=4
        else if (townshipWaste>=70 && townshipWaste<80)
            townshipHealthAndWellBeingWasteManagementScoreVar=3        
        else if (townshipWaste>=80 && townshipWaste<90)
            townshipHealthAndWellBeingWasteManagementScoreVar=2
        else if (townshipWaste>=90 && townshipWaste<=100)
            townshipHealthAndWellBeingWasteManagementScoreVar=1
        else
            townshipHealthAndWellBeingWasteManagementScoreVar=0           
        this.setState({
            townshipHealthAndWellBeingWasteManagementScore:townshipHealthAndWellBeingWasteManagementScoreVar
        })
        
        var townshipEnvStr = this.state.townshipHealthAndWellBeingEnvironmental
        var townshipEnv = Number(townshipEnvStr)
        var townshipHealthAndWellBeingEnvScoreVar=0
        if (townshipEnv>=0 && townshipEnv<50)
            townshipHealthAndWellBeingEnvScoreVar=6
        else if (townshipEnv>=50 && townshipEnv<100)
            townshipHealthAndWellBeingEnvScoreVar=5
        else if (townshipEnv>=100 && townshipEnv<150)
            townshipHealthAndWellBeingEnvScoreVar=4
        else if (townshipEnv>=150 && townshipEnv<200)
            townshipHealthAndWellBeingEnvScoreVar=5
        else if (townshipEnv>=200 && townshipEnv<300)
            townshipHealthAndWellBeingEnvScoreVar=6
        else if (townshipEnv>=300)
            townshipHealthAndWellBeingEnvScoreVar=4
        else
            townshipHealthAndWellBeingEnvScoreVar=0
        townshipHealthAndWellBeingEnvScoreVar/=6
        townshipHealthAndWellBeingEnvScoreVar*=10
        townshipHealthAndWellBeingEnvScoreVar=townshipHealthAndWellBeingEnvScoreVar.toFixed(2)
        this.setState({
            townshipHealthAndWellBeingEnvironmentalScore:townshipHealthAndWellBeingEnvScoreVar
        })
        
        var townshipHealthAndWellBeingDomainScore = 
        Number(townshipHealthAndWellBeingHealthSafetyScoreVar) + Number(townshipHealthAndWellBeingDigitalScoreVar)
            + Number(townshipHealthAndWellBeingWasteManagementScoreVar) + Number(townshipHealthAndWellBeingEnvScoreVar)
        townshipHealthAndWellBeingDomainScore = townshipHealthAndWellBeingDomainScore.toFixed(2)
        this.setState({
            townshipHealthAndWellBeingDomainScore:townshipHealthAndWellBeingDomainScore,
            townshipHealthAndWellBeingScore:townshipHealthAndWellBeingDomainScore
        })
        return townshipHealthAndWellBeingDomainScore
        
    }

    generateTownshipBusinessEnvironmentScores = () => {
        
        var townshipInnoStr = this.state.townshipBusinessEnvironmentInnovation
        var townshipInno = Number(townshipInnoStr)
        var townshipBusinessEnvironmentInnoScoreVar=0
        if (townshipInno>=1 && townshipInno<=13)
            townshipBusinessEnvironmentInnoScoreVar=10
        else if (townshipInno>=14 && townshipInno<=26)
            townshipBusinessEnvironmentInnoScoreVar=9
        else if (townshipInno>=27 && townshipInno<=39)
            townshipBusinessEnvironmentInnoScoreVar=8
        else if (townshipInno>=40 && townshipInno<=52)
            townshipBusinessEnvironmentInnoScoreVar=7
        else if (townshipInno>=53 && townshipInno<=65)
            townshipBusinessEnvironmentInnoScoreVar=6
        else if (townshipInno>=66 && townshipInno<=78)
            townshipBusinessEnvironmentInnoScoreVar=5
        else if (townshipInno>=79 && townshipInno<=91)
            townshipBusinessEnvironmentInnoScoreVar=4
        else if (townshipInno>=92 && townshipInno<=104)
            townshipBusinessEnvironmentInnoScoreVar=3        
        else if (townshipInno>=105 && townshipInno<=117)
            townshipBusinessEnvironmentInnoScoreVar=2
        else if (townshipInno>=118)
            townshipBusinessEnvironmentInnoScoreVar=1
        else
            townshipBusinessEnvironmentInnoScoreVar=0         
        this.setState({
            townshipBusinessEnvironmentInnovationScore:townshipBusinessEnvironmentInnoScoreVar
        })

        var townshipDigiPayStr = this.state.townshipBusinessEnvironmentDigital
        var townshipDigiPay = Number(townshipDigiPayStr)
        var townshipBusinessEnvironmentDigitalPaymentsScoreVar=0
        if (townshipDigiPay>=4.5)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=10
        else if (townshipDigiPay>=4 && townshipDigiPay<4.5)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=9
        else if (townshipDigiPay>=3.5 && townshipDigiPay<4)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=8
        else if (townshipDigiPay>=3 && townshipDigiPay<3.5)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=7
        else if (townshipDigiPay>=2.5 && townshipDigiPay<3)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=6
        else if (townshipDigiPay>=2 && townshipDigiPay<2.5)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=5
        else if (townshipDigiPay>=1.5 && townshipDigiPay<2)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=4
        else if (townshipDigiPay>=1 && townshipDigiPay<1.5)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=3        
        else if (townshipDigiPay>=0.5 && townshipDigiPay<1)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=2
        else if (townshipDigiPay>=0 && townshipDigiPay<0.5)
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=1
        else
            townshipBusinessEnvironmentDigitalPaymentsScoreVar=0         
        this.setState({
            townshipBusinessEnvironmentDigitalScore:townshipBusinessEnvironmentDigitalPaymentsScoreVar
        })

        var townshipMSMEStr = this.state.townshipBusinessEnvironmentMSME
        var townshipMSME = Number(townshipMSMEStr)
        var townshipBusinessEnvironmentMSMEScoreVar=0
        if (townshipMSME>=0 && townshipMSME<10)
            townshipBusinessEnvironmentMSMEScoreVar=0
        else if (townshipMSME>=10 && townshipMSME<20)
            townshipBusinessEnvironmentMSMEScoreVar=1
        else if (townshipMSME>=20 && townshipMSME<30)
            townshipBusinessEnvironmentMSMEScoreVar=2
        else if (townshipMSME>=30 && townshipMSME<40)
            townshipBusinessEnvironmentMSMEScoreVar=3
        else if (townshipMSME>=40 && townshipMSME<50)
            townshipBusinessEnvironmentMSMEScoreVar=4
        else if (townshipMSME>=50 && townshipMSME<60)
            townshipBusinessEnvironmentMSMEScoreVar=5
        else if (townshipMSME>=60 && townshipMSME<70)
            townshipBusinessEnvironmentMSMEScoreVar=6
        else if (townshipMSME>=70 && townshipMSME<80)
            townshipBusinessEnvironmentMSMEScoreVar=7        
        else if (townshipMSME>=80 && townshipMSME<90)
            townshipBusinessEnvironmentMSMEScoreVar=8
        else if (townshipMSME>=90 && townshipMSME<100)
            townshipBusinessEnvironmentMSMEScoreVar=9
        else if (townshipMSME>=100)
            townshipBusinessEnvironmentMSMEScoreVar=10
        else
            townshipBusinessEnvironmentMSMEScoreVar=0         
        this.setState({
            townshipBusinessEnvironmentMSMEScore:townshipBusinessEnvironmentMSMEScoreVar
        })

        
        var townshipBusinessEnvironmentDomainSum = townshipBusinessEnvironmentInnoScoreVar+townshipBusinessEnvironmentDigitalPaymentsScoreVar+townshipBusinessEnvironmentMSMEScoreVar
        townshipBusinessEnvironmentDomainSum=townshipBusinessEnvironmentDomainSum.toFixed(2)
        var townshipBusinessEnvironmentDomainScore = (townshipBusinessEnvironmentDomainSum)*4/3
        townshipBusinessEnvironmentDomainScore=townshipBusinessEnvironmentDomainScore.toFixed(2)
        this.setState({
            townshipBusinessEnvironmentSum : townshipBusinessEnvironmentDomainSum,
            townshipBusinessEnvironmentScore:townshipBusinessEnvironmentDomainScore
        })

        return townshipBusinessEnvironmentDomainSum
    }
    
    generateTownshipTransportationScores = () => {
        
        var counttownshipDigital=0
        if(this.state.townshipTransportationDigitalPayment==="Yes")
            counttownshipDigital++;
        if(this.state.townshipTransportationDigitalSchedule==="Yes")
            counttownshipDigital++;
        if(this.state.townshipTransportationDigitalCabApp==="Yes")
            counttownshipDigital++;
        if(this.state.townshipTransportationDigitalSafety==="Yes")
            counttownshipDigital++;
        else if(this.state.townshipTransportationDigitalSafety==="Partial")
            counttownshipDigital+=0.5;
        counttownshipDigital*=2.5
        this.setState({
            townshipTransportationDigitalScore : counttownshipDigital
        })
        
        var counttownshipMM=0
        if(this.state.townshipTransportationTransportRail==="Yes")
            counttownshipMM++;
        if(this.state.townshipTransportationTransportBus==="Yes")
            counttownshipMM++;
        if(this.state.townshipTransportationTransportTuk==="Yes")
            counttownshipMM++;
        if(this.state.townshipTransportationTransportCycle==="Yes")
            counttownshipMM++;
        counttownshipMM*=2.5
        this.setState({
            townshipTransportationTransportScore : counttownshipMM
        })
        
        var townshipTransportCCStr = this.state.townshipTransportationCustomerCentricness
        var townshipTransportCC = Number(townshipTransportCCStr)
        var townshipTransportCCScoreVar=0
        if (townshipTransportCC>=10 )
            townshipTransportCCScoreVar=10
        else if (townshipTransportCC>=7.5 && townshipTransportCC<10)
            townshipTransportCCScoreVar=7
        else if (townshipTransportCC>=5 && townshipTransportCC<7.5)
            townshipTransportCCScoreVar=5
        else if (townshipTransportCC>=2.5 && townshipTransportCC<5)
            townshipTransportCCScoreVar=2
        else if (townshipTransportCC<2.5)
            townshipTransportCCScoreVar=0
        else
            townshipTransportCCScoreVar=0
        this.setState({
            townshipTransportationCustomerCentricnessScore : townshipTransportCCScoreVar 
        })
        
        var townshipTransportTrafficStr = this.state.townshipTransportationTrafffic
        var townshipTransportTraffic = Number(townshipTransportTrafficStr)
        var townshipTransportTrafficScoreVar=0
        if (townshipTransportTraffic>=0 && townshipTransportTraffic<20 )
            townshipTransportTrafficScoreVar=10
        else if (townshipTransportTraffic>=20 && townshipTransportTraffic<30)
            townshipTransportTrafficScoreVar=8
        else if (townshipTransportTraffic>30 && townshipTransportTraffic<40)
            townshipTransportTrafficScoreVar=6
        else if (townshipTransportTraffic>=40 && townshipTransportTraffic<60)
            townshipTransportTrafficScoreVar=4
        else if (townshipTransportTraffic>=60 && townshipTransportTraffic<70)
            townshipTransportTrafficScoreVar=2
        else if (townshipTransportTraffic>=70)
            townshipTransportTrafficScoreVar=0
        else
            townshipTransportTrafficScoreVar=0
        this.setState({
            townshipTransportationTraffficScore : townshipTransportTrafficScoreVar 
        })
        

        var townshipTransportationScoreVar = Number(counttownshipDigital) + Number(counttownshipMM) + Number(townshipTransportCCScoreVar) + Number(townshipTransportTrafficScoreVar)
        townshipTransportationScoreVar=townshipTransportationScoreVar.toFixed(2)
        this.setState({
            townshipTransportationScore:townshipTransportationScoreVar,
            townshipTransportationSum:townshipTransportationScoreVar
        })
        return townshipTransportationScoreVar
    }

    generateTownshipInfrastructureScores = () => {
        
        console.log("final test final")
        var greenRatioStr = this.state.townshipInfrastructureEntertainment
        var greenRatioVar = Number(greenRatioStr)
        greenRatioVar = (greenRatioVar/9.5)*10
        if(greenRatioVar>10)
            greenRatioVar=10
        greenRatioVar=greenRatioVar.toFixed(2)
        this.setState({
            townshipInfrastructureEntertainmentScore:greenRatioVar
        })
        
        var renewableRatioStr = this.state.townshipInfrastructureRenewable
        var renewableRatioVar = Number(renewableRatioStr)
        renewableRatioVar = (renewableRatioVar/20)*10
        if(renewableRatioVar>10)
            renewableRatioVar=10
        renewableRatioVar = renewableRatioVar.toFixed(2)
        this.setState({
            townshipInfrastructureRenewableScore:renewableRatioVar
        })

        var skyscraperRatioStr = this.state.townshipInfrastructureMegastructure
        var skyscraperRatioVar = Number(skyscraperRatioStr)
        skyscraperRatioVar = (skyscraperRatioVar/0.2)*10
        if(skyscraperRatioVar>10)
            skyscraperRatioVar=10
        skyscraperRatioVar=skyscraperRatioVar.toFixed(2)
        this.setState({
            townshipInfrastructureMegastructureScore:skyscraperRatioVar
        })

        var roadToAreaRatioStr = this.state.townshipInfrastructureCitizenUsage
        console.log(roadToAreaRatioStr)
        var roadToAreaRatioVar = Number(roadToAreaRatioStr)
        console.log(roadToAreaRatioVar)
        roadToAreaRatioVar = (roadToAreaRatioVar/25)*10
        console.log(roadToAreaRatioVar)
        if(roadToAreaRatioVar>10)
            roadToAreaRatioVar=10
        this.setState({
            townshipInfrastructureCitizenUsageScore:roadToAreaRatioVar
        })

        var infraScoreVar = Number(greenRatioVar) + Number(renewableRatioVar) + Number(skyscraperRatioVar) + Number(roadToAreaRatioVar)
        infraScoreVar=infraScoreVar.toFixed(2)
        this.setState({
            townshipInfrastructureScore:infraScoreVar
        })
        return infraScoreVar
        
    }
    
    generateTownshipScore = (event,nextStep) =>{
        event.preventDefault();

        this.setState({
            isLoading : true
        });

        //generate Civic & Social Score
        var townshipCivicAndSocialSumVar = this.generateTownshipCivilAndSocialScores()
        var townshipHealthAndWellBeingSumVar = this.generateTownshipHealthAndWellBeingScores()
        var townshipBusinessEnvironmentSumVar = this.generateTownshipBusinessEnvironmentScores()
        var townshipTransportationSumVar = this.generateTownshipTransportationScores()
        var townshipInfrastructureSumVar = this.generateTownshipInfrastructureScores()
        
        var overallScoreVar = Number(townshipCivicAndSocialSumVar) + Number(townshipHealthAndWellBeingSumVar) + Number(townshipBusinessEnvironmentSumVar)
         + Number(townshipTransportationSumVar) + Number(townshipInfrastructureSumVar)

        overallScoreVar/=1.9
        overallScoreVar = overallScoreVar.toFixed(2)
        
        this.setState({
            townshipOverallScore : overallScoreVar
        });

        this.setState({
            isLoading : false,
            currentStep : nextStep
        });

    }
    
    townshipbackToHome = (event,nextStep) => {
        this.setState({
            isLoading : true
        });

        this.setState({
            //Township CivicAndSocial Sector, Civic&Social Domain proxies
            townshipCivicAndSocialTourism:"",
            townshipCivicAndSocialUtilitiesInternet:"",
            townshipCivicAndSocialUtilitiesWater:"",
            townshipCivicAndSocialUtilitiesSanitation:"",
            townshipCivicAndSocialUtilitiesEnergy:"",
            townshipCivicAndSocialSecurity:"",
            townshipCivicAndSocialPublicPolicyInfraWebApp:"",
            townshipCivicAndSocialPublicPolicyInfraCharterHealthEdu:"",
            townshipCivicAndSocialPublicPolicyInfraCharterTax:"",
            townshipCivicAndSocialPublicPolicyInfraCharterHousing:"",
            townshipCivicAndSocialPublicPolicyInfraDoc:"",

            //Township HealthAndWellBeing Sector, Health&Well-being Domain proxies
            townshipHealthAndWellBeingHospital:"",
            townshipHealthAndWellBeingDigital:"",
            townshipHealthAndWellBeingWasteManagement:"",
            townshipHealthAndWellBeingEnvironmental:"",

            //Township BusinessEnvironment Sector, Business Environment Domain proxies
            townshipBusinessEnvironmentInnovation:"",
            townshipBusinessEnvironmentDigital:"",
            townshipBusinessEnvironmentMSME:"",

            //Township Transportation Sector, Transportation Domain proxies
            townshipTransportationDigitalPayment:"",
            townshipTransportationDigitalSchedule:"",
            townshipTransportationDigitalCabApp:"",
            townshipTransportationDigitalSafety:"",
            townshipTransportationTransportRail:"",
            townshipTransportationTransportBus:"",
            townshipTransportationTransportTuk:"",
            townshipTransportationTransportCycle:"",
            townshipTransportationCustomerCentricness:"",
            townshipTransportationTrafffic:"",

            //Township Infrastructure Sector, Infrastructure Domain proxies 
            townshipInfrastructureEntertainment:"",
            townshipInfrastructureRenewable:"",
            townshipInfrastructureMegastructure:"",
            townshipInfrastructureCitizenUsage:"",
            
            //Township Sector, Civic&Social parameter scores
            townshipCivicAndSocialTourismScore:"",
            townshipCivicAndSocialUtilitiesScore:"",
            townshipCivicAndSocialSecurityScore:"",
            townshipCivicAndSocialPublicPolicyInfraScore:"",
            
            //Township Sector, Health&Well-being parameter scores
            townshipHealthAndWellBeingHospitalScore:"",
            townshipHealthAndWellBeingDigitalScore:"",
            townshipHealthAndWellBeingWasteManagementScore:"",
            townshipHealthAndWellBeingEnvironmentalScore:"",

            //Township Sector, Business Environment parameter scores
            townshipBusinessEnvironmentInnovationScore:"",
            townshipBusinessEnvironmentDigitalScore:"",
            townshipBusinessEnvironmentMSMEScore:"",

            //Township Sector, Transportation parameter scores
            townshipTransportationDigitalScore:"",
            townshipTransportationTransportScore:"",
            townshipTransportationCustomerCentricnessScore:"",
            townshipTransportationTraffficScore:"",

            //Township Sector, Infrastructure parameter scores
            townshipInfrastructureEntertainmentScore:"",
            townshipInfrastructureRenewableScore:"",
            townshipInfrastructureMegastructureScore:"",
            townshipInfrastructureCitizenUsageScore:"",
            
            //Township Sector, Civic&Social Domain Score
            townshipCivicAndSocialScore :"",
            townshipCivicAndSocialSum : "",
            
            //Township Sector, Health & Well Being Domain Score
            townshipHealthAndWellBeingScore:"",
            townshipHealthAndWellBeingSum:"",
            
            //Township Sector, Health & Well Being Domain Score
            townshipBusinessEnvironmentScore:"",
            townshipBusinessEnvironmentSum:"",

            //Township Sector, Transportation Domain Score
            townshipTransportationScore:"",
            townshipTransportationSum:"",
            
            //Township Sector, Infrastructure Domain Score
            townshipInfrastructureScore:"",
            townshipInfrastructureSum:"",
            
            //Township Sector Score
            townshipOverallScore:"",
        })

        this.setState({
            nslWindowView : "startEvaluation",
            cityName:"",
            sectorName:"",
            currentStep : 1
        })

        this.setState({
            isLoading : false
        });
    }
    

    
    hideStartEvaluation = () => {
       this.setState({
        nslWindowView : "enterCityName"
       })
    }

    hideCityName = () => {
        this.setState({
            nslWindowView : "selectSector"
        })
     }

    hideSectorLoadAirport = (sectorName) => {
        this.setState({
            nslWindowView : "airportTransaction",
            sectorName:sectorName
        })
    }

    hideSectorLoadTownship = (sectorName) => {
        this.setState({
            nslWindowView : "townshipTransaction",
            sectorName:sectorName
        })
    }

    documentImageStyle(item){
        return item.value
    }

    
    render() {
        return (
            <React.Fragment>
                        {
                            this.state.nslWindowView === 'startEvaluation' ? 
                            (
                                <div className="nsl-wrapper">
                                    <section
                                        // className="nsl-content active-sidebar"
                                        className={this.props.nslwindow}
                                        style={
                                            { 
                                                "paddingTop": "42px",
                                                "marginLeft":"60px" 
                                            }
                                        }
                                    >
                                        <div className="container-fluid ns-content">
                                            <div className="innertxt row">
                                                <div className="col-md-9 col-12">
                                                    <ul className="list-unstyled searchprod">
                                                       <a onClick={() => this.hideStartEvaluation()}>                                                
                                                         <img src={smartcitylogo} className="img-fluid"
                                                          width={280}
                                                          height={200}
                                                          style = {{
                                                            "border":"solid 2.5px",
                                                            "borderRadius":"1.8em",
                                                            "borderColor":"#000000"
                                                        }}
                                                          />        
                                                        </a>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            ) :
                            null
                        }

                        {
                            this.state.nslWindowView === 'enterCityName' ? 
                            (
                                <div className="nsl-wrapper">
                                    <section
                                        // className="nsl-content active-sidebar"
                                        className={this.props.nslwindow}
                                        style={
                                            { 
                                                "paddingTop": "42px",
                                                "marginLeft":"60px" 
                                            }
                                        }
                                    >
                                        <div className="container-fluid ns-content">
                                            <div className="innertxt row">
                                                <div className="col-md-9 col-12">
                                                    <ul className="list-unstyled searchprod">
                                                       {/* <a onClick={() => this.hideStartEvaluation()}>                                                 */}
                                                        <div>
                                                         <img src={citynamelogo} className="img-fluid"
                                                          width={280}
                                                          height={200}
                                                          style = {{
                                                            "border":"solid 3px",
                                                            "borderRadius":"1.8em",
                                                            "borderColor":"#000000"
                                                        }}
                                                          />  
                                                          </div>      
                                                        {/* </a> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custmrval">
                                            <table>
                                                <tr>
                                                    <td>Enter City Name</td>
                                                    <td>:</td>    
                                                    <td>
                                                        <input 
                                                            type="text"
                                                            width="400px"
                                                            required
                                                            value={this.state.cityName}
                                                            onChange={eCityName => this.updateCityName(eCityName.target.value)}
                                                        />
                                                    </td>
                                                 </tr>
                                            </table>
                                            <button 
                                                className="btn" 
                                                style={{
                                                borderRadius:"0.4em",
                                                marginTop:"18px",
                                                marginLeft: "82px",
                                                width : "158px",
                                                height : "27px",
                                                background : "#7AB2F1"
                                                }} 
                                                onClick={() => this.hideCityName()}
                                                >Submit City Name
                                            </button>
                                        </div>
                                    </section>
                                    
                                </div>
                            ) :
                            null
                        }

                        {
                            this.state.nslWindowView === 'selectSector' ? 
                            (
                                <div className="nsl-wrapper">
                                    <section
                                        // className="nsl-content active-sidebar"
                                        className={this.props.nslwindow}
                                        style={
                                            { 
                                                "paddingTop": "42px",
                                                "marginLeft":"60px" 
                                            }
                                        }
                                    >
                                        
                                        <div className="container-fluid ns-content">
                                            <div className="innertxt row">
                                            <div className="bottle-info">
                                            <div className="select-qty d-flex"
                                                style={
                                                {
                                                    "fontStyle":"italic"
                                                }
                                                }
                                            >
                                                <h3 className="clr-org">Select Sector</h3>
                                            </div>
                                        </div>
                                                <div className="col-md-9 col-9">
                                                    <ul className="list-unstyled searchprod">
                                                        
                                                            <a 
                                                            style = {{
                                                                "marginRight":"35px"
                                                            }}
                                                            onClick={() => this.hideSectorLoadAirport("Airport Evaluation")}>
                                                                <img src={airportlogo} 
                                                                    className="img-fluid" 
                                                                    width={128}
                                                                    height={140}
                                                                    style = {{
                                                                        "border":"solid 3px",
                                                                        "borderRadius":"1.8em",
                                                                        "borderColor":"#000000"
                                                                    }}
                                                                />
                                                            </a>
                                                        
                                                            <a onClick={() => this.hideSectorLoadTownship("Township Evaluation")}>
                                                                <img 
                                                                    src={townshiplogo}
                                                                    className="img-fluid" 
                                                                    width={130}
                                                                    height={140}
                                                                    style = {{
                                                                        "border":"solid 3px",
                                                                        "borderRadius":"1.8em",
                                                                        "borderColor":"#000000"
                                                                    }}
                                                                />
                                                            </a>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            ) :
                            null
                        }            

                        {
                            this.state.nslWindowView=== 'airportTransaction' ? 
                            (
                                <div className="nsl-wrapper">
                                    <section 
                                        className={this.props.nslwindow}
                                        // style={{"paddingTop": "35px"}}
                                    >
                                        <div className="container-fluid ns-content">
                                            <div className="pt-12">
                                                <div className="row">
                                                    <div className="col-md-6 col-20">
                                                        <div className="">
                                                            <div 
                                                                className="searchrestbox searchrestbox2 clearfix" 
                                                                style={
                                                                    {
                                                                        "marginLeft": "150px",
                                                                        "textDecorationLine" : "underline"
                                                                    }
                                                                }>
                                                                
                                                            </div>
                                                            
                                                            {
                                                                this.state.isLoading ? (
                                                                    <React.Fragment>
                                                                        <div className="spinner-border" role="status"
                                                                            style={{
                                                                                marginLeft:"60%",
                                                                                marginTop:"32%"
                                                                            }}
                                                                        >  
                                                                        </div>
                                                                        <span 
                                                                            className="text"
                                                                            style={{
                                                                                width:"400px",
                                                                                marginLeft:"57%"
                                                                            }}
                                                                        >
                                                                            Loading...
                                                                            {/* <Loader/> */}
                                                                        </span> 
                                                                        
                                                                    </React.Fragment>
                                                                ) :
                                                                (
                                                                <React.Fragment>    
                                                          
                                                                <div className="steps-content">
            
                                                                {
                                                                    (this.state.currentStep === 1) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Civic And Social</h3>
                                                                                </div>
                                                                            </div>              
                                                    

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Tourism</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval"
                                                                            
                                                                            >
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Airport Ranking On Skytrax</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.airportCivicAndSocialTourism}
                                                                                                onChange={eAirportCivicAndSocialTourism => this.updateAirportCivicAndSocialTourism(eAirportCivicAndSocialTourism.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Security Infrastructure</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Security Efficiency Reviews</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.airportCivicAndSocialSecurity}
                                                                                                onChange={eAirportCivicAndSocialSecurity => this.updateAirportCivicAndSocialSecurity(eAirportCivicAndSocialSecurity.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Public Policy Infrastructure </h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Does the airport have website?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportCivicandSocialPublicPolicyInfraWebsite"
                                                                                                    value={this.state.airportCivicAndSocialPublicPolicyInfraWebsite}
                                                                                                    onChange={eAirportCivicAndSocialPublicPolicyInfraWebsite => this.updateAirportCivicAndSocialPublicPolicyInfraWebsite(eAirportCivicAndSocialPublicPolicyInfraWebsite.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr>
                                                                                        <td>Does the airport have mobile application?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportCivicandSocialPublicPolicyInfraApp"
                                                                                                    value={this.state.airportCivicAndSocialPublicPolicyInfraApp}
                                                                                                    onChange={eAirportCivicAndSocialPublicPolicyInfraApp => this.updateAirportCivicAndSocialPublicPolicyInfraApp(eAirportCivicAndSocialPublicPolicyInfraApp.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr>
                                                                                        <td>Does the airport have chat/call assistance?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportCivicandSocialPublicPolicyInfraAssistance"
                                                                                                    value={this.state.airportCivicAndSocialPublicPolicyInfraAssistance}
                                                                                                    onChange={eAirportCivicAndSocialPublicPolicyInfraAssistance => this.updateAirportCivicAndSocialPublicPolicyInfraAssistance(eAirportCivicAndSocialPublicPolicyInfraAssistance.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr>
                                                                                        <td>Does the airport have digital twin?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportCivicandSocialPublicPolicyInfraDigitalTwin"
                                                                                                    value={this.state.airportCivicAndSocialPublicPolicyInfraDigitalTwin}
                                                                                                    onChange={eAirportCivicAndSocialPublicPolicyInfraDigitalTwin => this.updateAirportCivicAndSocialPublicPolicyInfraDigitalTwin(eAirportCivicAndSocialPublicPolicyInfraDigitalTwin.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr>
                                                                                        <td>Does the airport publish annual report?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportCivicandSocialPublicPolicyInfraAnnualReport"
                                                                                                    value={this.state.airportCivicAndSocialPublicPolicyInfraAnnualReport}
                                                                                                    onChange={eAirportCivicAndSocialPublicPolicyInfraAnnualReport => this.updateAirportCivicAndSocialPublicPolicyInfraAnnualReport(eAirportCivicAndSocialPublicPolicyInfraAnnualReport.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    
                                                                                </table>
                                                                            </div>

            
                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "128px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }}
                                                                                onClick={(event) => this.moveToNextStep(event,2)}
                                                                                >Next
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

                                                                {
                                                                    (this.state.currentStep === 2) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Health And Well-Being</h3>
                                                                                </div>
                                                                            </div>              
                                                    

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Availability of Health, Safety and Security</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Does the airport have AHA 'Health and Safety' accreditation?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportHealthAndWellBeingHealthSafety"
                                                                                                    value={this.state.airportHealthAndWellBeingHealthSafety}
                                                                                                    onChange={eAirportHealthAndWellBeingHealthSafety => this.updateAirportHealthAndWellBeingHealthSafety(eAirportHealthAndWellBeingHealthSafety.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Use of digital services for Education </h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Does the airport have AHA 'Digital Services For Education' accreditation?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportHealthAndWellBeingDigitalServicesEducation"
                                                                                                    value={this.state.airportHealthAndWellBeingDigitalServicesEducation}
                                                                                                    onChange={eAirportHealthAndWellBeingDigitalServicesEducation => this.updateAirportHealthAndWellBeingDigitalServicesEducation(eAirportHealthAndWellBeingDigitalServicesEducation.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Waste Management</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Waste recycled/Total Waste Generated (%)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.airportHealthAndWellBeingWasteManagement}
                                                                                                onChange={eAirportHealthAndWellBeingWasteManagement => this.updateAirportHealthAndWellBeingWasteManagement(eAirportHealthAndWellBeingWasteManagement.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Carbon Accreditation of the Airport</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Does the airport have AHA 'Carbon' accreditation?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportHealthAndWellBeingCarbon"
                                                                                                    value={this.state.airportHealthAndWellBeingCarbon}
                                                                                                    onChange={eAirportHealthAndWellBeingCarbon => this.updateAirportHealthAndWellBeingCarbon(eAirportHealthAndWellBeingCarbon.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Not Accredited">Not Accredited</option>
                                                                                                    <option value="Level 1 Mapping">Level 1 Mapping</option>
                                                                                                    <option value="Level 2 Reduction">Level 2 Reduction</option>
                                                                                                    <option value="Level 3 Optimization">Level 3 Optimization</option>
                                                                                                    <option value="Level 3+ Neutrality">Level 3+ Neutrality</option>
                                                                                                    <option value="Level 4 Transition">Level 4 Transition</option>
                                                                                                    <option value="Level 4+ Transformation">Level 4+ Transformation</option>
                                                                                                    <option value="Level 5 Net Zero">Level 5 Net Zero</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "128px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }} 
                                                                                onClick={(event) => this.moveToNextStep(event,3)}
                                                                                >Next
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

                                                                {   
                                                                    (this.state.currentStep === 3) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Business Environment</h3>
                                                                                </div>
                                                                            </div>              
                                                    

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Digital Payments</h4>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Digital payments per 1000 people (in millions)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.airportBusinessEnvironmentDigitalPayments}
                                                                                                onChange={eAirportBusinessEnvironmentDigitalPayments => this.updateAirportBusinessEnvironmentDigitalPayments(eAirportBusinessEnvironmentDigitalPayments.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            
                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "128px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }} 
                                                                                onClick={(event) => this.moveToNextStep(event,4)}
                                                                                >Next
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

                                                                {
                                                                    (this.state.currentStep === 4) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Transportation</h3>
                                                                                </div>
                                                                            </div>              
                                                    

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Digital</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Does the airport have unmanned ticketing systems?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportTransportationDigitalTicketing"
                                                                                                    value={this.state.airportTransportationDigitalTicketing}
                                                                                                    onChange={eAirportTransportationDigitalTicketing => this.updateAirportTransportationDigitalTicketing(eAirportTransportationDigitalTicketing.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the airport have biometric systems for movement of passengers?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportTransportationDigitalBiometrics"
                                                                                                    value={this.state.airportTransportationDigitalBiometrics}
                                                                                                    onChange={eAirportTransportationDigitalBiometrics => this.updateAirportTransportationDigitalBiometrics(eAirportTransportationDigitalBiometrics.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the airport have automated check-in systems?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportTransportationDigitalCheckIn"
                                                                                                    value={this.state.airportTransportationDigitalCheckIn}
                                                                                                    onChange={eAirportTransportationDigitalCheckIn => this.updateAirportTransportationDigitalCheckIn(eAirportTransportationDigitalCheckIn.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the airport have baggage self-transfer?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportTransportationDigitalBaggage"
                                                                                                    value={this.state.airportTransportationDigitalBaggage}
                                                                                                    onChange={eAirportTransportationDigitalBaggage => this.updateAirportTransportationDigitalBaggage(eAirportTransportationDigitalBaggage.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Means of Transport</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Does the airport have access to local transit rail system?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportTransportationTransportMetro"
                                                                                                    value={this.state.airportTransportationTransportMetro}
                                                                                                    onChange={eAirportTransportationTransportMetro => this.updateAirportTransportationTransportMetro(eAirportTransportationTransportMetro.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the airport have access to local bus service?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportTransportationTransportBus"
                                                                                                    value={this.state.airportTransportationTransportBus}
                                                                                                    onChange={eAirportTransportationTransportBus => this.updateAirportTransportationTransportBus(eAirportTransportationTransportBus.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the airport have carpark facility?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportTransportationTransportCarPark"
                                                                                                    value={this.state.airportTransportationTransportCarPark}
                                                                                                    onChange={eAirportTransportationTransportCarPark => this.updateAirportTransportationTransportCarPark(eAirportTransportationTransportCarPark.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the airport have access to third party cab service?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportTransportationTransportCab"
                                                                                                    value={this.state.airportTransportationTransportCab}
                                                                                                    onChange={eAirportTransportationTransportCab => this.updateAirportTransportationTransportCab(eAirportTransportationTransportCab.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Citizen Centricity</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Airport Navigation Rating (Scale of 10)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.airportTransportationCustomerCentricness}
                                                                                                onChange={eAirportTransportationCustomerCentricness => this.updateAirportTransportationCustomerCentricness(eAirportTransportationCustomerCentricness.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Traffic</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Rating of Arrivals & Departures (Scale of 10)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.airportTransportationTraffficArrivals}
                                                                                                onChange={eAirportTransportationTraffficArrivals => this.updateAirportTransportationTraffficArrivals(eAirportTransportationTraffficArrivals.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                    
                                                                                </table>
                                                                            </div>

                                                                            
                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "128px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }} 
                                                                                onClick={(event) => this.moveToNextStep(event,5)}
                                                                                >Next
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

                                                                {
                                                                    (this.state.currentStep === 5) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Infrastructure</h3>
                                                                                </div>
                                                                            </div>              
                                                    

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Entertainment Places</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Rating of airport restaurant and stores (Scale of 5)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.airportInfrastructureEntertainment}
                                                                                                onChange={eAirportInfrastructureEntertainment => this.updateAirportInfrastructureEntertainment(eAirportInfrastructureEntertainment.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Renewable Energy Usage</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Does the airport currently use or plan to use SAF?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportInfrastructureRenewableSAF"
                                                                                                    value={this.state.airportInfrastructureRenewableSAF}
                                                                                                    onChange={eAirportInfrastructureRenewableSAF => this.updateAirportInfrastructureRenewableSAF(eAirportInfrastructureRenewableSAF.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the airport commit to carbon emission control?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportInfrastructureRenewableCarbon"
                                                                                                    value={this.state.airportInfrastructureRenewableCarbon}
                                                                                                    onChange={eAirportInfrastructureRenewableCarbon => this.updateAirportInfrastructureRenewableCarbon(eAirportInfrastructureRenewableCarbon.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the airport have energy-saving design in place?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="airportTransportationTransportCab"
                                                                                                    value={this.state.airportInfrastructureRenewableEnergyDesign}
                                                                                                    onChange={eAirportInfrastructureRenewableEnergyDesign => this.updateAirportInfrastructureRenewableEnergyDesign(eAirportInfrastructureRenewableEnergyDesign.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Megastructures</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Annual Number fo passengers per terminal (millions)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.airportInfrastructureMegastructure}
                                                                                                onChange={eAirportInfrastructureMegastructure => this.updateAirportInfrastructureMegastructure(eAirportInfrastructureMegastructure.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Citizen Usage</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Aiport comfort and facilities rating(Scale of 5)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.airportInfrastructureCitizenUsage}
                                                                                                onChange={eAirportInfrastructureCitizenUsage => this.updateAirportInfrastructureCitizenUsage(eAirportInfrastructureCitizenUsage.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                
                                                                            </div>

                                                                            
                                                                            <button 
                                                                                className="btn btn-primary" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "198px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }} 
                                                                                 onClick={(event) => this.generateAirportScore(event,6)}
                                                                                // onClick={(event) => this.moveToNextStep(event,6)}
                                                                                >Generate Smartcity Score
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

                                                                {
                                                                    (this.state.currentStep === 6) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Smart City Report</h3>
                                                                                </div>
                                                                            </div>              
                                                    
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td><b>City Name</b></td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            {this.state.cityName?this.state.cityName:<React.Fragment>Not Found</React.Fragment>}
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td><b>Sector Evaluated</b></td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            {this.state.sectorName?this.state.sectorName:<React.Fragment>Not Found</React.Fragment>}
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Domain-wise Report</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval"
                                                                                style={{
                                                                                    "paddingRight":"1200px"
                                                                                }}>
                                                                                <table  
                                                                                    borderColor="#000000"
                                                                                    border={3}
                                                                                    style={{
                                                                                        "marginRight":"200px",
                                                                                        "marginTop":"-15px",
                                                                                        "marginBottom":"10px",
                                                                                        "width":"1400px"
                                                                                    }}
                                                                                >
                                                                                    <tr style={{
                                                                                        "backgroundColor":"#99CEFC",
                                                                                        "height":"30px"
                                                                                    }}>
                                                                                        <td colSpan={2} align="center"><b><u>Civic And Social</u></b></td>
                                                                                        <td colSpan={2} align="center"><b><u>Health And Well-Being</u></b></td>
                                                                                        <td colSpan={2} align="center"><b><u>Business Environment</u></b></td>
                                                                                        <td colSpan={2} align="center"><b><u>Transportation</u></b></td>
                                                                                        <td colSpan={2} align="center"><b><u>Infrastructure</u></b></td>
                                                                                    </tr>
                                                                                    <tr
                                                                                        style={{
                                                                                            "backgroundColor":"#C3E9FE"
                                                                                        }}
                                                                                    >
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Tourism</b></td>
                                                                                        <td align="center">{this.state.airportCivicAndSocialTourismScore?this.state.airportCivicAndSocialTourismScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Availability of Safety ans Security</b></td>
                                                                                        <td align="center">{this.state.airportHealthAndWellBeingHealthSafetyScore?this.state.airportHealthAndWellBeingHealthSafetyScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Hubs for Innovation and Business Creation</b></td>
                                                                                        <td align="center">NA</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Digital</b></td>
                                                                                        <td align="center">{this.state.airportTransportationDigitalScore?this.state.airportTransportationDigitalScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Entertaiment Places</b></td>
                                                                                        <td align="center">{this.state.airportInfrastructureEntertainmentScore?this.state.airportInfrastructureEntertainmentScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Utilities Distribution</b></td>
                                                                                        <td align="center">NA</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Use of Digital Services in Education or Upskilling</b></td>
                                                                                        <td align="center">{this.state.airportHealthAndWellBeingDigitalServicesEducationScore?this.state.airportHealthAndWellBeingDigitalServicesEducationScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Digital Payments per 1000 Persons</b></td>
                                                                                        <td align="center">{this.state.airportBusinessEnvironmentDigitalPaymentsScore?this.state.airportBusinessEnvironmentDigitalPaymentsScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Transportation Means</b></td>
                                                                                        <td align="center">{this.state.airportTransportationTransportScore?this.state.airportTransportationTransportScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Renewable Energy Usage</b></td>
                                                                                        <td align="center">{this.state.airportInfrastructureRenewableScore?this.state.airportInfrastructureRenewableScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                    <tr >
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Security Monitoring</b></td>
                                                                                        <td align="center">{this.state.airportCivicAndSocialSecurityScore?this.state.airportCivicAndSocialSecurityScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Waste Management</b></td>
                                                                                        <td align="center">{this.state.airportHealthAndWellBeingWasteManagementScore?this.state.airportHealthAndWellBeingWasteManagementScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Number of MSMEs per 1000 persons</b></td>
                                                                                        <td align="center">NA</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Citizen Centricity</b></td>
                                                                                        <td align="center">{this.state.airportTransportationCustomerCentricnessScore?this.state.airportTransportationCustomerCentricnessScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Megastructures</b></td>
                                                                                        <td align="center">{this.state.airportInfrastructureMegastructureScore?this.state.airportInfrastructureMegastructureScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Public Policy And Communication</b></td>
                                                                                        <td align="center">{this.state.airportCivicAndSocialPublicPolicyInfraScore?this.state.airportCivicAndSocialPublicPolicyInfraScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Environmental Impact</b></td>
                                                                                        <td align="center">{this.state.airportHealthAndWellBeingCarbonScore?this.state.airportHealthAndWellBeingCarbonScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td colSpan={2} align="center"  style={{"backgroundColor":"#FCE0B9"}}><b>NA</b></td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Traffic</b></td>
                                                                                        <td align="center">{this.state.airportTransportationTraffficScore?this.state.airportTransportationTraffficScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Citizen Usage</b></td>
                                                                                        <td align="center">{this.state.airportInfrastructureCitizenUsageScore?this.state.airportInfrastructureCitizenUsageScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                    <tr style={{"backgroundColor":"#6495ED"}}>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.airportCivicAndSocialScore?this.state.airportCivicAndSocialScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.airportHealthAndWellBeingScore?this.state.airportHealthAndWellBeingScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.airportBusinessEnvironmentScore?this.state.airportBusinessEnvironmentScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.airportTransportationScore?this.state.airportTransportationScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.airportInfrastructureScore?this.state.airportInfrastructureScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td><b>Overall Smart City Score</b></td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            {this.state.airportOverallScore?this.state.airportOverallScore:<React.Fragment>Not Found</React.Fragment>}
                                                                                            
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            
                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "198px",
                                                                                    height : "27px",
                                                                                    background : "#B6D0E2"
                                                                                }} 
                                                                                 onClick={(event) => this.airportbackToHome(event,1)}
                                                                                >Back to Home
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }



                                                            </div>
                                                        </React.Fragment>
                                                        )
                                                    } 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        
                            </section> 
                                </div> 
                            )
                            :
                            null
                        }

                        {
                            this.state.nslWindowView=== 'townshipTransaction' ? 
                            (
                                <div className="nsl-wrapper">
                                    <section 
                                        className={this.props.nslwindow}
                                        // style={{"paddingTop": "35px"}}
                                    >
                                        <div className="container-fluid ns-content">
                                            <div className="pt-12">
                                                <div className="row">
                                                    <div className="col-md-6 col-20">
                                                        <div className="">
                                                            <div 
                                                                className="searchrestbox searchrestbox2 clearfix" 
                                                                style={
                                                                    {
                                                                        "marginLeft": "150px",
                                                                        "textDecorationLine" : "underline"
                                                                    }
                                                                }>
                                                                
                                                            </div>
                                                            
                                                            {
                                                                this.state.isLoading ? (
                                                                    <React.Fragment>
                                                                        <div className="spinner-border" role="status"
                                                                            style={{
                                                                                marginLeft:"60%",
                                                                                marginTop:"32%"
                                                                            }}
                                                                        >  
                                                                        </div>
                                                                        <span 
                                                                            className="text"
                                                                            style={{
                                                                                width:"400px",
                                                                                marginLeft:"57%"
                                                                            }}
                                                                        >
                                                                            Loading...
                                                                            {/* <Loader/> */}
                                                                        </span> 
                                                                        
                                                                    </React.Fragment>
                                                                ) :
                                                                (
                                                                <React.Fragment>    
                                                          
                                                                <div className="steps-content">
            
                                                                {
                                                                    (this.state.currentStep === 1) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Civic And Social</h3>
                                                                                </div>
                                                                            </div>              
                                                    

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Tourism</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval"
                                                                            
                                                                            >
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Number of hotel beds per 1000 tourists</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipCivicAndSocialTourism}
                                                                                                onChange={eTownshipCivicAndSocialTourism => this.updateTownshipCivicAndSocialTourism(eTownshipCivicAndSocialTourism.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Utilities Distribution</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Access to internet (%)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipCivicAndSocialUtilitiesInternet}
                                                                                                onChange={eTownshipCivicAndSocialUtilitiesInternet => this.updateTownshipCivicAndSocialUtilitiesInternet(eTownshipCivicAndSocialUtilitiesInternet.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Access to clean drinking water (%)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipCivicAndSocialUtilitiesWater}
                                                                                                onChange={eTownshipCivicAndSocialUtilitiesWater => this.updateTownshipCivicAndSocialUtilitiesWater(eTownshipCivicAndSocialUtilitiesWater.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Access to sanitation services (%)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipCivicAndSocialUtilitiesSanitation}
                                                                                                onChange={eTownshipCivicAndSocialUtilitiesSanitation => this.updateTownshipCivicAndSocialUtilitiesSanitation(eTownshipCivicAndSocialUtilitiesSanitation.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Energy Supply (Gigajoules)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipCivicAndSocialUtilitiesEnergy}
                                                                                                onChange={eTownshipCivicAndSocialUtilitiesEnergy => this.updateTownshipCivicAndSocialUtilitiesEnergy(eTownshipCivicAndSocialUtilitiesEnergy.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Security Infrastructure</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Number of CCTV Cameras per 1000 people</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipCivicAndSocialSecurity}
                                                                                                onChange={eTownshipCivicAndSocialSecurity => this.updateTownshipCivicAndSocialSecurity(eTownshipCivicAndSocialSecurity.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Public Policy And Communication </h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Is there a website/mobile application of local government authority?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipCivicAndSocialPublicPolicyInfraWebApp"
                                                                                                    value={this.state.townshipCivicAndSocialPublicPolicyInfraWebApp}
                                                                                                    onChange={eTownshipCivicAndSocialPublicPolicyInfraWebApp => this.updateTownshipCivicAndSocialPublicPolicyInfraWebApp(eTownshipCivicAndSocialPublicPolicyInfraWebApp.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr>
                                                                                        <td>Is the public policy charter on health and education available online?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipCivicAndSocialPublicPolicyInfraCharterHealthEdu"
                                                                                                    value={this.state.townshipCivicAndSocialPublicPolicyInfraCharterHealthEdu}
                                                                                                    onChange={eTownshipCivicAndSocialPublicPolicyInfraCharterHealthEdu => this.updateTownshipCivicAndSocialPublicPolicyInfraCharterHealthEdu(eTownshipCivicAndSocialPublicPolicyInfraCharterHealthEdu.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr>
                                                                                        <td>Is the public policy charter on taxes available online?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipCivicAndSocialPublicPolicyInfraCharterTax"
                                                                                                    value={this.state.townshipCivicAndSocialPublicPolicyInfraCharterTax}
                                                                                                    onChange={eTownshipCivicAndSocialPublicPolicyInfraCharterTax => this.updateTownshipCivicAndSocialPublicPolicyInfraCharterTax(eTownshipCivicAndSocialPublicPolicyInfraCharterTax.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr>
                                                                                        <td>Is the public policy charter on housing available online?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipCivicAndSocialPublicPolicyInfraCharterHousing"
                                                                                                    value={this.state.townshipCivicAndSocialPublicPolicyInfraCharterHousing}
                                                                                                    onChange={eTownshipCivicAndSocialPublicPolicyInfraCharterHousing => this.updateTownshipCivicAndSocialPublicPolicyInfraCharterHousing(eTownshipCivicAndSocialPublicPolicyInfraCharterHousing.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr>
                                                                                        <td>Can the citizens download government issued documents online?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipCivicAndSocialPublicPolicyInfraDoc"
                                                                                                    value={this.state.townshipCivicAndSocialPublicPolicyInfraDoc}
                                                                                                    onChange={eTownshipCivicAndSocialPublicPolicyInfraDoc => this.updateTownshipCivicAndSocialPublicPolicyInfraDoc(eTownshipCivicAndSocialPublicPolicyInfraDoc.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    
                                                                                </table>
                                                                            </div>

            
                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "128px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }} 
                                                                                onClick={(event) => this.moveToNextStep(event,2)}
                                                                                >Next
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

                                                                {
                                                                    (this.state.currentStep === 2) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Health And Well-Being</h3>
                                                                                </div>
                                                                            </div>              
                                                    

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Availability of Health, Safety and Security</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Number of hospital beds per 1000 people</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipHealthAndWellBeingHospital}
                                                                                                onChange={eTownshipHealthAndWellBeingHospital => this.updateTownshipHealthAndWellBeingHospital(eTownshipHealthAndWellBeingHospital.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Use of digital services for Education </h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Percentage of schools connected to internet(%)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipHealthAndWellBeingDigital}
                                                                                                onChange={eTownshipHealthAndWellBeingDigital => this.updateTownshipHealthAndWellBeingDigital(eTownshipHealthAndWellBeingDigital.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Waste Management</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Percentage of waste generated that is not managed to control environmental risks (%)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipHealthAndWellBeingWasteManagement}
                                                                                                onChange={eTownshipHealthAndWellBeingWasteManagement => this.updateTownshipHealthAndWellBeingWasteManagement(eTownshipHealthAndWellBeingWasteManagement.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Environmental Impact</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>AQI Level in the city </td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipHealthAndWellBeingEnvironmental}
                                                                                                onChange={eTownshipHealthAndWellBeingEnvironmental => this.updateTownshipHealthAndWellBeingEnvironmental(eTownshipHealthAndWellBeingEnvironmental.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "128px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }} 
                                                                                onClick={(event) => this.moveToNextStep(event,3)}
                                                                                >Next
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

                                                                {   
                                                                    (this.state.currentStep === 3) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Business Environment</h3>
                                                                                </div>
                                                                            </div>              
                                                    
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Hubs for innovation And business creation</h4>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Innovation labs (Ranking)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipBusinessEnvironmentInnovation}
                                                                                                onChange={eTownshipBusinessEnvironmentInnovation => this.updateTownshipBusinessEnvironmentInnovation(eTownshipBusinessEnvironmentInnovation.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Digital Payments</h4>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Digital payments per 1000 people (in millions)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipBusinessEnvironmentDigital}
                                                                                                onChange={eTownshipBusinessEnvironmentDigital => this.updateTownshipBusinessEnvironmentDigital(eTownshipBusinessEnvironmentDigital.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >MSMEs</h4>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Number of MSMEs per 1000 persons</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipBusinessEnvironmentMSME}
                                                                                                onChange={eTownshipBusinessEnvironmentMSME => this.updateTownshipBusinessEnvironmentMSME(eTownshipBusinessEnvironmentMSME.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            
                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "128px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }} 
                                                                                onClick={(event) => this.moveToNextStep(event,4)}
                                                                                >Next
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

                                                                {
                                                                    (this.state.currentStep === 4) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Transportation</h3>
                                                                                </div>
                                                                            </div>              
                                                    

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Digital</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Does the public transport have contactless payments?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipTransportationDigitalPayment"
                                                                                                    value={this.state.townshipTransportationDigitalPayment}
                                                                                                    onChange={eTownshipTransportationDigitalPayment => this.updateTownshipTransportationDigitalPayment(eTownshipTransportationDigitalPayment.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the public transport have real time schedule/tracking?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipTransportationDigitalSchedule"
                                                                                                    value={this.state.townshipTransportationDigitalSchedule}
                                                                                                    onChange={eTownshipTransportationDigitalSchedule => this.updateTownshipTransportationDigitalSchedule(eTownshipTransportationDigitalSchedule.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the transport system have 3rd party apps(Grab, Uber, etc)?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipTransportationDigitalCabApp"
                                                                                                    value={this.state.townshipTransportationDigitalCabApp}
                                                                                                    onChange={eTownshipTransportationDigitalCabApp => this.updateTownshipTransportationDigitalCabApp(eTownshipTransportationDigitalCabApp.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the transport system have safety monitoring(speed control camera, toll deduction, etc)??</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipTransportationDigitalSafety"
                                                                                                    value={this.state.townshipTransportationDigitalSafety}
                                                                                                    onChange={eTownshipTransportationDigitalSafety => this.updateTownshipTransportationDigitalSafety(eTownshipTransportationDigitalSafety.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                                    <option value="Partial">Partial</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Means of Transport</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Does the township have access to local transit rail system(Metro/MRT, Tram/LRT)?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipTransportationTransportRail"
                                                                                                    value={this.state.townshipTransportationTransportRail}
                                                                                                    onChange={eTownshipTransportationTransportRail => this.updateTownshipTransportationTransportRail(eTownshipTransportationTransportRail.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the township have EV bus service?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipTransportationTransportBus"
                                                                                                    value={this.state.townshipTransportationTransportBus}
                                                                                                    onChange={eTownshipTransportationTransportBus => this.updateTownshipTransportationTransportBus(eTownshipTransportationTransportBus.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the township have door-to-door connectivity(tuk-tuk, bike taxi, etc)?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipTransportationTransportTuk"
                                                                                                    value={this.state.townshipTransportationTransportTuk}
                                                                                                    onChange={eTownshipTransportationTransportTuk => this.updateTownshipTransportationTransportTuk(eTownshipTransportationTransportTuk.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Does the township have shared vehicle service(bicycle, cab, etc)?</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <select 
                                                                                                    name="townshipTransportationTransportCycle"
                                                                                                    value={this.state.townshipTransportationTransportCycle}
                                                                                                    onChange={eTownshipTransportationTransportCycle => this.updateTownshipTransportationTransportCycle(eTownshipTransportationTransportCycle.target.value)}
                                                                                                    required
                                                                                                >
                                                                                                    <option value={"---Select Option---"} selected>---Select Option---</option>
                                                                                                    <option value="Yes">Yes</option>
                                                                                                    <option value="No">No</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>

                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Customer Centricness</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Government Budget Allocation (%)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipTransportationCustomerCentricness}
                                                                                                onChange={eTownshipTransportationCustomerCentricness => this.updateTownshipTransportationCustomerCentricness(eTownshipTransportationCustomerCentricness.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Traffic</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Traffic Control Ranking</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipTransportationTrafffic}
                                                                                                onChange={eTownshipTransportationTrafffic => this.updateTownshipTransportationTrafffic(eTownshipTransportationTrafffic.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            
                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "128px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }} 
                                                                                onClick={(event) => this.moveToNextStep(event,5)}
                                                                                >Next
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

                                                                {
                                                                    (this.state.currentStep === 5) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Domain : Infrastructure</h3>
                                                                                </div>
                                                                            </div>              
                                                    

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Entertainment Places</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Greenery Ratio</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipInfrastructureEntertainment}
                                                                                                onChange={eTownshipInfrastructureEntertainment => this.updateTownshipInfrastructureEntertainment(eTownshipInfrastructureEntertainment.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Renewable Energy Usage</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Renewable energy supply percentage (%)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipInfrastructureRenewable}
                                                                                                onChange={eTownshipInfrastructureRenewable => this.updateTownshipInfrastructureRenewable(eTownshipInfrastructureRenewable.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Megastructures</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Skyscraper density in the city (100*Number of skyscrapers above the height of 100m/area of the city in sq km) </td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipInfrastructureMegastructure}
                                                                                                onChange={eTownshipInfrastructureMegastructure => this.updateTownshipInfrastructureMegastructure(eTownshipInfrastructureMegastructure.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org">Citizen Usage</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td>Road-to-area ratio given on government website (%)</td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            <input 
                                                                                                type="text"
                                                                                                width="300px"
                                                                                                required
                                                                                                value={this.state.townshipInfrastructureCitizenUsage}
                                                                                                onChange={eTownshipInfrastructureCitizenUsage => this.updateTownshipInfrastructureCitizenUsage(eTownshipInfrastructureCitizenUsage.target.value)}
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                
                                                                            </div>

                                                                            
                                                                            <button 
                                                                                className="btn btn-primary" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "198px",
                                                                                    height : "27px",
                                                                                    background : "#A3D3FC"
                                                                                }} 
                                                                                 onClick={(event) => this.generateTownshipScore(event,6)}
                                                                                // onClick={(event) => this.moveToNextStep(event,6)}
                                                                                >Generate Smartcity Score
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }

{
                                                                    (this.state.currentStep === 6) ? 
                                                                    (
                                                                        <div className="first-box center-box" id="custmrval" 
                                                                        style={
                                                                            {
                                                                                "marginLeft": "150px",
                                                                                
                                                                            }
                                                                        }
                                                                        >
                                                                        
                                                                            
                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex"
                                                                                style={
                                                                                    {
                                                                                        "fontStyle":"italic"
                                                                                    }
                                                                                }
                                                                                >
                                                                                    <h3 className="clr-org">Smart City Report</h3>
                                                                                </div>
                                                                            </div>              
                                                    
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td><b>City Name</b></td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            {this.state.cityName?this.state.cityName:<React.Fragment>Not Found</React.Fragment>}
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td><b>Sector Evaluated</b></td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            {this.state.sectorName?this.state.sectorName:<React.Fragment>Not Found</React.Fragment>}
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>

                                                                            <div className="bottle-info">
                                                                                <div className="select-qty d-flex">
                                                                                    <h4 className="clr-org"
                                                                                    >Domain-wise Report</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="custmrval"
                                                                                style={{
                                                                                    "paddingRight":"1200px"
                                                                                }}>
                                                                                <table  
                                                                                    borderColor="#000000"
                                                                                    border={3}
                                                                                    style={{
                                                                                        "marginRight":"200px",
                                                                                        "marginTop":"-15px",
                                                                                        "marginBottom":"10px",
                                                                                        "width":"1400px"
                                                                                    }}
                                                                                >
                                                                                    <tr style={{
                                                                                        "backgroundColor":"#99CEFC",
                                                                                        "height":"30px"
                                                                                    }}>
                                                                                        <td colSpan={2} align="center"><b><u>Civic And Social</u></b></td>
                                                                                        <td colSpan={2} align="center"><b><u>Health And Well-Being</u></b></td>
                                                                                        <td colSpan={2} align="center"><b><u>Business Environment</u></b></td>
                                                                                        <td colSpan={2} align="center"><b><u>Transportation</u></b></td>
                                                                                        <td colSpan={2} align="center"><b><u>Infrastructure</u></b></td>
                                                                                    </tr>
                                                                                    <tr
                                                                                        style={{
                                                                                            "backgroundColor":"#C3E9FE"
                                                                                        }}
                                                                                    >
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Name</i></b></td>
                                                                                        <td align="center" style={{"width":"140px","height":"25px"}}><b><i>Parameter Rating</i></b></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Tourism</b></td>
                                                                                        <td align="center">{this.state.townshipCivicAndSocialTourismScore?this.state.townshipCivicAndSocialTourismScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Availability of Safety ans Security</b></td>
                                                                                        <td align="center">{this.state.townshipHealthAndWellBeingHospitalScore?this.state.townshipHealthAndWellBeingHospitalScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Hubs for Innovation and Business Creation</b></td>
                                                                                        <td align="center">{this.state.townshipBusinessEnvironmentInnovationScore?this.state.townshipBusinessEnvironmentInnovationScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Digital</b></td>
                                                                                        <td align="center">{this.state.townshipTransportationDigitalScore?this.state.townshipTransportationDigitalScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Entertaiment Places</b></td>
                                                                                        <td align="center">{this.state.townshipInfrastructureEntertainmentScore?this.state.townshipInfrastructureEntertainmentScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Utilities Distribution</b></td>
                                                                                        <td align="center">{this.state.townshipCivicAndSocialUtilitiesScore?this.state.townshipCivicAndSocialUtilitiesScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Use of Digital Services in Education or Upskilling</b></td>
                                                                                        <td align="center">{this.state.townshipHealthAndWellBeingDigitalScore?this.state.townshipHealthAndWellBeingDigitalScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Digital Payments per 1000 Persons</b></td>
                                                                                        <td align="center">{this.state.townshipBusinessEnvironmentDigitalScore?this.state.townshipBusinessEnvironmentDigitalScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Transportation Means</b></td>
                                                                                        <td align="center">{this.state.townshipTransportationTransportScore?this.state.townshipTransportationTransportScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Renewable Energy Usage</b></td>
                                                                                        <td align="center">{this.state.townshipInfrastructureRenewableScore?this.state.townshipInfrastructureRenewableScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                    <tr >
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Security Monitoring</b></td>
                                                                                        <td align="center">{this.state.townshipCivicAndSocialSecurityScore?this.state.townshipCivicAndSocialSecurityScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Waste Management</b></td>
                                                                                        <td align="center">{this.state.townshipHealthAndWellBeingWasteManagementScore?this.state.townshipHealthAndWellBeingWasteManagementScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Number of MSMEs per 1000 persons</b></td>
                                                                                        <td align="center">{this.state.townshipBusinessEnvironmentMSMEScore?this.state.townshipBusinessEnvironmentMSMEScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Customer Centeredness</b></td>
                                                                                        <td align="center">{this.state.townshipTransportationCustomerCentricnessScore?this.state.townshipTransportationCustomerCentricnessScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Megastructures</b></td>
                                                                                        <td align="center">{this.state.townshipInfrastructureMegastructureScore?this.state.townshipInfrastructureMegastructureScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Public Policy And Communication</b></td>
                                                                                        <td align="center">{this.state.townshipCivicAndSocialPublicPolicyInfraScore?this.state.townshipCivicAndSocialPublicPolicyInfraScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Environmental Impact</b></td>
                                                                                        <td align="center">{this.state.townshipHealthAndWellBeingEnvironmentalScore?this.state.townshipHealthAndWellBeingEnvironmentalScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td colSpan={2} align="center"  style={{"backgroundColor":"#FCE0B9"}}><b>NA</b></td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Traffic</b></td>
                                                                                        <td align="center">{this.state.townshipTransportationTraffficScore?this.state.townshipTransportationTraffficScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center" style={{"backgroundColor":"#FCE0B9"}}><b>Citizen Usage</b></td>
                                                                                        <td align="center">{this.state.townshipInfrastructureCitizenUsageScore?this.state.townshipInfrastructureCitizenUsageScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                    <tr style={{"backgroundColor":"#6495ED"}}>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.townshipCivicAndSocialScore?this.state.townshipCivicAndSocialScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.townshipHealthAndWellBeingScore?this.state.townshipHealthAndWellBeingScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.townshipBusinessEnvironmentScore?this.state.townshipBusinessEnvironmentScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.townshipTransportationScore?this.state.townshipTransportationScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                        <td align="center"><b>Domain Score (40)</b></td>
                                                                                        <td align="center">{this.state.townshipInfrastructureScore?this.state.townshipInfrastructureScore:<React.Fragment>Not Found</React.Fragment>}</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            
                                                                            <div className="custmrval">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td><b>Overall Smart City Score</b></td>
                                                                                        <td>:</td>    
                                                                                        <td>
                                                                                            {this.state.townshipOverallScore?this.state.townshipOverallScore:<React.Fragment>Not Found</React.Fragment>}
                                                                                            
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                            
                                                                            <button 
                                                                                className="btn btn-primary scanbtn" 
                                                                                style={{
                                                                                    borderRadius:"0.4em",
                                                                                    marginTop:"30px",
                                                                                    marginRight: "14px",
                                                                                    marginBottom: "24px",
                                                                                    width : "198px",
                                                                                    height : "27px",
                                                                                    background : "#B6D0E2"
                                                                                }} 
                                                                                 onClick={(event) => this.townshipbackToHome(event,1)}
                                                                                >Back to Home
                                                                            </button>
                                                                        </div>
                                                                    ):
                                                                    null
                                                                }



                                                            </div>
                                                        </React.Fragment>
                                                        )
                                                    } 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>        
                            </section> 
                                </div> 
                            )
                            :
                            null
                        }
            </React.Fragment>
        )
    }
}

    HomePage.propTypes ={
        menuToggle : PropTypes.func.isRequired,
        nslwindow: PropTypes.object.isRequired
    }
  
    const mapStateToProps = state => ({
        nslwindow: state.menustate.nslwindow
    })
  
  export default connect(mapStateToProps, { menuToggle })(HomePage);