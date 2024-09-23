

const CountryDetail = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountryDetail>
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            </CountryDetail>
        </div>
    );
};

export default CountryDetail;