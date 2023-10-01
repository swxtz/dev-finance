// import { Logout } from "@/components/Dashboard/Button/Button";

import { MoneyWrapper } from "@/components/Dashboard/MoneyWrapper/MoneyWrapper";
import { NewTransactionModal } from "@/components/Dashboard/NewTransactionModal/NewTransactionModal";

export default function Dashboard() {
    return (
        <main className="mx-32">
            <div className="mt-20">
                <MoneyWrapper
                    income="17.400,00"
                    expense="1.259,00"
                    balance="16.141,00"
                />
            </div>

            <div className="mt-16">
                <NewTransactionModal />
            </div>
        </main>
    );
}
