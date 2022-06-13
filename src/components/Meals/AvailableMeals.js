import React, {useEffect, useState} from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';




const AvailableMeals = (props) => {
	const [meals, setMeals] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [httpError, setHttpError] = useState(null)


	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch('https://react-http-afa43-default-rtdb.firebaseio.com/meals.json')
			
			if (!response.ok) {
				throw new Error('Something went wrong!')
			}
			const responseData = await response.json()

			const loadedMeals = []

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					key: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price
				})
			}
			setMeals(loadedMeals)
			setIsLoading(false)
		}
		fetchMeals().catch((error) => {
			setIsLoading(false)
			setHttpError(error.message)
		})
	}, [])
	
	
	const mealsList = meals.map((meal) => 
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	)
	


	const loading = <p>Loading...</p>

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		)
	}

	if (httpError) {
		return (
			<section className={classes.MealsError}>
				<p>{httpError}</p>
			</section>
		)
	}

    return (
      <section className={classes.meals}>
        <Card>
          <ul>
              {!isLoading ? mealsList: loading}    
          </ul>
        </Card> 
      </section>
    )

}


export default AvailableMeals