import Header from '~/Components/layouts/components/Header';

function OnlyHeaderLayput({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default OnlyHeaderLayput;
