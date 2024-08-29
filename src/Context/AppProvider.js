import React, { useState } from 'react';
import AppContext from './AppContext';
import defaultCategories from '../data/Categroy.json';

const AppProvider = ({ children }) => {
	const [categories, setCategories] = useState(defaultCategories);
	const [tempUpdatedCategory, setTempUpdatedCategory] = useState(defaultCategories);
	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(1);

	const updateTempWidget = (widgetIndex) => {
		const updatedCategories = tempUpdatedCategory.map((category, index) => {
			if (index === selectedCategoryIndex) {
				const updatedWidgets = category.widgets.map((widget, index) => {
					if (index === widgetIndex) {
						return { ...widget, isSelected: !widget.isSelected };
					}
					return widget;
				});
				return { ...category, widgets: updatedWidgets };
			}
			return category;
		});
		setTempUpdatedCategory(updatedCategories);
	};

	const handleUpdateWidgets = () => {
		setCategories(tempUpdatedCategory);
	};

	return (
		<AppContext.Provider
			value={{
				categories,
				tempUpdatedCategory,
				selectedCategoryIndex,
				updateTempWidget,
				setCategories,
				setSelectedCategoryIndex,
				handleUpdateWidgets,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
