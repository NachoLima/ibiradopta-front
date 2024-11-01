"use client";
import React, { useState } from 'react';
import FAQItem from './FAQItem';


const faqs = [
    {
        question: "¿Cómo es el proceso para plantar un árbol?",
        answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        question: "¿Cuál es el costo de plantar un árbol?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        question: "¿Para qué tareas irá destinado el dinero recaudado?",
        answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    },
    {
        question: "¿Podré hacer un seguimiento de mi árbol y visitarlo?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    }
];

export default function FAQList() {
    const [focusedIndex, setFocusedIndex] = useState(0);

    const handleFocus = (index: React.SetStateAction<number>) => {
        setFocusedIndex(index);
    };

    /**
     * Handles keyboard navigation for the FAQ list.
     *
     * @param {Object} event - The keyboard event object.
     * @param {string} event.key - The key that was pressed.
     * @param {Function} setFocusedIndex - Function to update the focused index.
     * @param {number} faqs.length - The length of the FAQ list.
     */
    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'ArrowDown') {
            setFocusedIndex((prevIndex) => (prevIndex + 1) % faqs.length);
        } else if (event.key === 'ArrowUp') {
            setFocusedIndex((prevIndex) => (prevIndex - 1 + faqs.length) % faqs.length);
        }
    };


    return (
        <div className='divide-y divide-solid px-10' onKeyDown={handleKeyDown}>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer}
                    isFocused={focusedIndex === index}
                    onFocus={() => handleFocus(index)}
                    onToggle={() => { }} />
            ))}
        </div>
    );
}