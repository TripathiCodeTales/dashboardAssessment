import React, { useState } from 'react';
import AppContext from './AppContext';

const defaultCategories = [
	{
		name: 'CSPM Executive Dashboard',
		abbr: 'CSPM',
		widgets: [
			{
				name: 'Cloud Accounts',
				isSelected: true,
				detail: [
					{
						id: 0,
						value: 50,
						label: 'connected',
						isChecked: 'true',
					},
					{
						id: 1,
						value: 50,
						label: 'not connected',
						isChecked: 'true',
					},
				],
			},
			{
				name: 'Cloud Account Risk Assessment',
				isSelected: true,
				detail: [
					{
						id: 0,
						value: 1689,
						label: 'passed',
						isChecked: 'true',
					},
					{
						id: 1,
						value: 36,
						label: 'Not available',
						isChecked: 'true',
					},
					{
						id: 2,
						value: 68,
						label: 'warning',
						isChecked: 'true',
					},
					{
						id: 3,
						value: 1689,
						label: 'failed',
						isChecked: 'true',
					},
				],
			},
			{
				name: 'Risk Assessment',
				isSelected: false,
			},
		],
	},
	{
		name: 'CWPP Dashboard',
		abbr: 'CWPP',
		widgets: [
			{ name: 'Top 5 Namespace Specific Alerts', isSelected: true },
			{ name: 'Workload Headers', isSelected: false },
			{ name: 'Workload payload', isSelected: false },
		],
	},
	{
		name: 'Registry Scan',
		abbr: 'Registry',
		widgets: [
			{ name: 'Image Risk Assessment', isSelected: true },
			{ name: 'Image Security Issue', isSelected: true },
		],
	},
];

const AppProvider = ({ children }) => {
	const [categories, setCategories] = useState(defaultCategories);
	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(1);

	const updateWidget = (widgetIndex) => {
		const updatedCategories = categories.map((category, index) => {
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
		setCategories(updatedCategories);
	};

	return (
		<AppContext.Provider
			value={{ categories, selectedCategoryIndex, updateWidget, setCategories, setSelectedCategoryIndex }}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
