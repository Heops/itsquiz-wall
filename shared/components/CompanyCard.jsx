import React from 'react';
import Button from 'react-mdl/lib/Button';

export class CompanyCard extends React.Component {
    render() {
        const { id, pictureURL, companyName, country, city, onClick } = this.props;

        return (
            <div clasName='CompanyCard'>
                Company {companyName} from {country} {city}

                <Button colored={true} onClick={onClick}>
                    View details
                </Button>
            </div>
        );
    }
}

