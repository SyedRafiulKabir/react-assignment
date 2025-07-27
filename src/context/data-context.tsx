import type { TrailerModel } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

type Course = {
    id: number;
    title: string;
    description: string;
    platform: string;
    type: string;
    media: TrailerModel[];
    // modality: string;
    // start_at: string;
    checklist: {
        color: string;
        icon: string;
        id: string;
        list_page_visibility: boolean;
        text: string;
    }[]; // You can define a structure if SEO metadata is available
    cta_text: {
        name: string;
        value: string;
    };
    // sections: {
    //     type: string;
    //     name: string;
    //     description: string;
    //     bg_color: string;
    //     order_idx: number;
    //     values: [];
    // }[];
    sections: {
        type: string;
        name: string;
        description: string;
        bg_color: string;
        order_idx: number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        values: any;
    }[];
    // is_cohort_based_course: boolean;
    // delivery_method: string;
};



type DataContextType = {
    data: Course | null;
    loading: boolean;
    error: string | null;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [data, setData] = useState<Course | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch data");
                return res.json();
            })
            .then((json) => setData(json.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <DataContext.Provider value={{ data, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};
