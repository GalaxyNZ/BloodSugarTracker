import React, { useRef, useState } from "react";

export const [currentTab, setCurrentTab] = useState("Home");
export const [showMenu, setShowMenu] = useState(false);
export const [menuButton, setMenuButton] = useState("menu");

export const offsetValue = useRef(new Animated.Value(0)).current;
export const scaleValue = useRef(new Animated.Value(1)).current;
export const closeButtonOffset = useRef(new Animated.Value(0)).current;
