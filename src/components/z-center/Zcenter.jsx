import { makeStyles } from '@material-ui/core';
import React from 'react';
import AlertsCard from './alerts-card/AlertsCard';
import OrganizationCard from './organization-card/OrganizationCard';
import ProfileCard from './profile-card/ProfileCard';
import ServiceCard from './services-cards/ServiceCard';
import { ReactComponent as BlockFileStorageIcon } from "./services-cards/icons/blockFileStorageIcon.svg";
import { ReactComponent as PrivateStorageIcon } from "./services-cards/icons/privateStorageIcon.svg";
import { ReactComponent as ObjectStorageIcon } from "./services-cards/icons/objectStorageIcon.svg";
import { ReactComponent as ComputeIcon } from "./services-cards/icons/computeIcon.svg";
import Banner from './banner/Banner';

const useStyles = makeStyles(() => ({
    root: {
        padding: "20px 40px",
    },
    profileCards: {
        display: "flex",
        flexWrap: "wrap",
    },
    edgeServices: {
        display: "flex",
        flexWrap: "wrap",
    },
    services: {
        display: "flex",
        flexWrap: "wrap",
    },
    title: {
        marginTop: "43px",
        fontWeight: 300,
        fontSize: "36px",
        color: "white",
        fontFamily: "Lato",
        fontStyle: "normal",
    }
}));

export default function Zcenter({ edgeServicesInfo, servicesInfo }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.profileCards}>
                <OrganizationCard />
                <ProfileCard />
                <AlertsCard />
            </div>

            <div className={classes.title}>Edge Services</div>
            <div className={classes.edgeServices}>
                {edgeServicesInfo.map(elem =>
                    <ServiceCard title={elem.title} description={elem.description} amount={elem.amount}
                        icon={elem.icon} key={elem.title} />
                )}
            </div >

            <div className={classes.title}>Services</div>
            <div className={classes.services}>
                {servicesInfo.map(elem =>
                    <ServiceCard title={elem.title} description={elem.description}
                        icon={elem.icon} key={elem.title} />
                )}
            </div>

            <Banner />
        </div>
    );
}

Zcenter.defaultProps = {
    edgeServicesInfo: [
        { title: "Compute Accounts", description: "Create and manage cloud instances using pre-defined or custom instance types and key pairs.", amount: 0, icon: <ComputeIcon /> },
        { title: "Object Storage Accounts", description: "Virtual Object Storage accounts support multi-tenancy, for reduced costs with the same security and QoS you’ve come to expect from Zadara.", amount: 0, icon: <ObjectStorageIcon /> },
        { title: "Private Object Storage", description: "A virtual object storage that supports both HDD and SSD, offering S3 and Swift compatible Object Storage with private and dedicated resources.", amount: 0, icon: <PrivateStorageIcon /> },
        { title: "Block and File Storage", description: "Elastic and private Block and File Storage System which provides Enterprise-grade data protection and data management storage services.", amount: 0, icon: <BlockFileStorageIcon /> },
    ],
    servicesInfo: [
        { title: "Cost Explorer", description: "View and export your invoices, cost projections, and usage data.", icon: <ComputeIcon /> },
        { title: "IAM", description: "Zadara IAM is a permissions and user management system that helps you securely control access to your Zadara resources. Using Zadara IAM web-service, you can manage and control who is authorized to use your organization resources.", icon: <ComputeIcon /> },
    ],
};