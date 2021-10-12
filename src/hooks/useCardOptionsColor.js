import { useState } from 'react';
import { cardOptionsColor } from '../helpers/cardOptionsColor';

export const useCardOptionsColor = (setValues) => {
    const [colors, setColors] = useState(cardOptionsColor);

    const handleChangeFocus = (bgColor) => {
        setValues((values) => ({ ...values, color: bgColor }));

        const newFocus = colors.map((color) =>
            color.background === bgColor
                ? { ...color, focusState: !color.focusState }
                : { ...color, focusState: false },
        );

        setColors([...newFocus]);
    };

    return { colors, setColors, handleChangeFocus };
};
