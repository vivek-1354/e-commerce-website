import React from 'react';

const NotFoundPage = () => {
    // Inline CSS styles
    const styles = {
        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'Arial, sans-serif'
    };

    return (
        <div style={styles}>
            <h1 style={{ fontSize: '48px', color: 'red' }}>404 - Not Found</h1>
            <p style={{ fontSize: '24px' }}>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;
