// src/components/forms/SignaturePad.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Canvas-based digital signature pad component
 * Fixed precision: cursor/touch matches exactly with stroke
 */
const SignaturePad = ({ value, onChange }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const ctxRef = useRef(null);
    const lastPointRef = useRef(null);
    const isDrawingRef = useRef(false);

    // Get precise coordinates relative to canvas
    const getCoordinates = useCallback((e) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };

        const rect = canvas.getBoundingClientRect();

        // Calculate scale factors between CSS size and actual canvas size
        const scaleX = rect.width / canvas.offsetWidth;
        const scaleY = rect.height / canvas.offsetHeight;

        let clientX, clientY;

        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else if (e.changedTouches && e.changedTouches.length > 0) {
            clientX = e.changedTouches[0].clientX;
            clientY = e.changedTouches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const x = (clientX - rect.left) / scaleX;
        const y = (clientY - rect.top) / scaleY;

        return { x, y };
    }, []);

    // Initialize canvas with proper DPI scaling
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const setupCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            const context = canvas.getContext('2d');
            context.scale(dpr, dpr);
            context.strokeStyle = '#000';
            context.lineWidth = 2;
            context.lineCap = 'round';
            context.lineJoin = 'round';
            ctxRef.current = context;
        };

        setupCanvas();

        window.addEventListener('resize', setupCanvas);
        return () => window.removeEventListener('resize', setupCanvas);
    }, []);

    // Setup touch event listeners with { passive: false }
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleTouchStart = (e) => {
            e.preventDefault();
            const ctx = ctxRef.current;
            if (!ctx) return;

            const { x, y } = getCoordinates(e);
            ctx.beginPath();
            ctx.moveTo(x, y);
            lastPointRef.current = { x, y };
            isDrawingRef.current = true;
            setIsDrawing(true);
        };

        const handleTouchMove = (e) => {
            if (!isDrawingRef.current) return;
            e.preventDefault();

            const ctx = ctxRef.current;
            if (!ctx) return;

            const { x, y } = getCoordinates(e);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
            lastPointRef.current = { x, y };
        };

        const handleTouchEnd = () => {
            if (isDrawingRef.current) {
                const ctx = ctxRef.current;
                if (ctx) ctx.closePath();
                isDrawingRef.current = false;
                setIsDrawing(false);
                lastPointRef.current = null;
            }
        };

        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', handleTouchEnd);
        canvas.addEventListener('touchcancel', handleTouchEnd);

        return () => {
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('touchend', handleTouchEnd);
            canvas.removeEventListener('touchcancel', handleTouchEnd);
        };
    }, [getCoordinates]);

    const startDrawing = useCallback((e) => {
        const ctx = ctxRef.current;
        if (!ctx) return;

        const { x, y } = getCoordinates(e);
        ctx.beginPath();
        ctx.moveTo(x, y);
        lastPointRef.current = { x, y };
        isDrawingRef.current = true;
        setIsDrawing(true);
    }, [getCoordinates]);

    const draw = useCallback((e) => {
        if (!isDrawingRef.current) return;

        const ctx = ctxRef.current;
        if (!ctx) return;

        const { x, y } = getCoordinates(e);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
        lastPointRef.current = { x, y };
    }, [getCoordinates]);

    const stopDrawing = useCallback(() => {
        if (isDrawingRef.current) {
            const ctx = ctxRef.current;
            if (ctx) ctx.closePath();
            isDrawingRef.current = false;
            setIsDrawing(false);
            lastPointRef.current = null;
        }
    }, []);

    const handleClear = () => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        onChange('');
    };

    const handleSave = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dataUrl = canvas.toDataURL('image/png');
        onChange(dataUrl);
    };

    return (
        <div className="signature-pad">
            <canvas
                ref={canvasRef}
                className="signature-canvas"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                style={{
                    width: '100%',
                    height: '150px',
                    touchAction: 'none'
                }}
            />
            <div className="signature-actions">
                <button type="button" className="btn-reset" onClick={handleClear}>
                    Bersihkan
                </button>
                <button type="button" className="btn-download" onClick={handleSave}>
                    Simpan TTD
                </button>
            </div>
            {value && <img src={value} alt="TTD Preview" className="signature-preview" />}
        </div>
    );
};

export default SignaturePad;
