import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions =  [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Basic fitness classes",
              "Discounted smoothie bar",
              "One free personal training session per month"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Unlimited fitness classes",
              "Discounted smoothie bar",
              "Access to swimming pool",
              "Two free personal training sessions per month"
            ]
          },
          {
            "id": 3,
            "name": "VIP Membership",
            "price": 79.99,
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Unlimited fitness classes",
              "Personal trainer consultation",
              "Sauna and steam room access",
              "Towel service",
              "Access to tennis courts",
              "Discounted spa services"
            ]
          }
        ];
      

    return (
        <div>
            <h2 className="text-6xl">Best Prices in Town</h2>
            <div className="grid md:grid-cols-3 gap-8 mx-32 my-12">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;