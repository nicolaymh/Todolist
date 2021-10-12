import { useState } from 'react';
import { CardOptionsColor } from '../helpers/cardOptionsColor';

export const useCardOptionsColor = () => {
    const [colors, setColors] = useState(CardOptionsColor);

    const handleChangeFocus = (bgColor) => {
        const newFocus = colors.map((color) => {
            if (color.background === bgColor) {
                return { ...color, focusState: !color.focusState };
            } else {
                return { ...color, focusState: false };
            }
        });

        setColors([...newFocus]);
    };

    return { colors, setColors, handleChangeFocus };
};
