"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface FAQItemProps {
    question: string;
    answer: string;
    isFocused: boolean;
    onFocus: () => void;
    onToggle: () => void;
}

export default function FAQItem({ question, answer, isFocused, onFocus, onToggle }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        onToggle();
    };

    const handleKeyDown = (event: { key: string; preventDefault: () => void; }) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleOpen();
        }
    };

    return (
        <div
            className="flex-column space-y-4 p-3 font-Poppins"
            tabIndex={0}
            onFocus={onFocus}
            onKeyDown={handleKeyDown}
            style={{
                cursor: 'pointer',
            }}>
            <div className={`flex ${isFocused ? 'text-green-500' : 'text-moss-green'} hover:text-green-500 justify-between`} onClick={toggleOpen} style={{ fontWeight: 'bold' }}>
                {question}
                <Image className="" src={isOpen ? "/icon-minus.svg" : "/plus.png"} alt="icon" width={50} height={50} />
            </div>
            {isOpen && <p className="text-moss-green pr-24 ">{answer}</p>}
        </div>
    );
} 