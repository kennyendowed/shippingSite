
export enum ConnectionStatus {
    Online,
    Offline
}

export interface config {
    jwt: string,
    country: string,
    login: boolean
}

export interface StoredRequest {
  url: string,
  type: string,
  data: any,
  time: number,
  headers: any,
  id: string
}


export interface authModel {
    email: string,
    country: string,
    first_name: string,
    last_name:string,
    password: string,
    password_confirmation: string,
    phone: number
}

export interface accountsInfoModel {
    username: string,
    email: string,
    auth_id: string,
    customer_id: string,
    isTerms: boolean,
    firstname: string,
    lastname: string,
    sex: string,
    phone: string,
    image: any,
    date_added: any,
    access: string,
    address: {
        apartment: number,
        street: string,
        city: string,
        lga: string,
        state: string,
        country: string
    },
    kyc: {
        
    },
    nextofkin: {

    }
};

export interface dsaaccountModel {
    account_number: string,
    balance: any,
    amount_withdrawable: number,
    can_withdraw: Boolean,
    free_withdrawal_balance: number,
    lock_up_period: number,
    status: string,
    account_type: string,
    date_created: Date,
    createdBy: string,
    customer_id: string,
    withdrawal_scheme_id: any,
    uid: number,
    plans: any
}

export interface planModel {
    id: number,
    account_number: string,
    allocated_interest_percentage: string,
    category: string,
    description: string,
    lump_save_amount: number,
    name: string,
    payment_completed: number,
    payment_count: number,
    payment_source: any,
    planid: string,
    recurring: boolean,
    recurring_interval: string,
    saving_frequency: string,
    saving_frequency_amount: number,
    saving_scheme: number,
    saving_scheme_info: any,
    start_date: string
    status: string,
    target_amount: number,
    target_date: string,
    uid: string
}

export interface schemeModel {
    allow_esave: boolean,
    allow_interest: boolean,
    allow_multiple: boolean,
    allow_swift_save: boolean,
    description: string,
    id: number,
    minimuim_investment_period: number,
    minimuim_investment_period_unit: string,
    minimuim_lump_sum: number,
    minimuim_principal: number,
    name: string,
    saving_frequency_amount: string,
    savings_type: string,
}

export interface rewardModel {
}

export interface interestModel {
}

