import { useMemo, useEffect, memo } from 'react';
import { useGetStartupConfig } from '~/data-provider';
import StaticFooter from './StaticFooter';
import '../../custom-theme.css';

interface HelpAndFAQProps {

}

const HelpAndFAQ = memo(
  ({

  }: HelpAndFAQProps) => {
    const { data: startupConfig } = useGetStartupConfig();

    useEffect(() => {

    }, []);

    return (
      <>
       
        <header>
            <div className="flex flex-col space-y-6 p-6 max-w-4xl mx-auto">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h1>HELP & FAQ</h1>
                    <p>Find answers to common questions and get help with using our platform</p>
                </div>
            </div>
        </header>

        <div className="flex flex-col max-w-4xl mx-auto p-6 space-y-8">

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Getting Started
                </h2>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        How do I start a conversation?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Simply type your message in the chat input at the bottom of the screen and press Enter or click the send button.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        How often is your AI model updated?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Our real estate market data is refreshed every month to ensure you have access to the latest industry information.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        Is my conversation data private?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Yes, we take privacy seriously. Your conversations are encrypted and stored securely.
                    </p>
                </div>                
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Account & Settings
                </h2>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        How do I change my preferences?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Access your settings by clicking on your profile icon in the top navigation bar.
                    </p>
                </div>


                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        Do my credits expire?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        No, your purchased credits do not expire. You can use them at any time, and they will remain available in your account until spent.
                    </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        How do I purchase more credits?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        To purchase additional credits, go to the <b>Account</b> menu, select <b>Settings</b>, and open the <b>Balance</b> tab. There you can choose a credit package and complete your purchase securely.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        How do I cancel my subscription?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        You can cancel your subscription at any time by going to the <b>Account</b> menu, selecting <b>Settings</b>, and navigating to the <b>Subscription</b> tab. There, you’ll find an option to manage or cancel your active subscription.
                    </p>
                </div>

            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Troubleshooting
                </h2>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        The chat isn't responding. What should I do?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Try refreshing the page or checking your internet connection. If the issue persists, contact support.
                    </p>
                </div>
            </div>

            <div class="space-y-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Real Estate Metrics FAQ
                </h2>

                {/* Median Sale Price */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median Sale Price
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        The midpoint price of all homes sold in a given period — half sold for more, half for less.
                    </p>
                </div>

                {/* Median Sale Price MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median Sale Price (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How much the median sale price changed compared to the previous month.
                    </p>
                </div>

                {/* Median Sale Price YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median Sale Price (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How much the median sale price changed compared to the same month last year.
                    </p>
                </div>

                {/* Median List Price */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median List Price
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        The middle price of all homes currently listed for sale.
                    </p>
                </div>

                {/* Median List Price MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median List Price (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Month-to-month change in the median list price.
                    </p>
                </div>

                {/* Median List Price YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median List Price (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Year-over-year change in the median list price.
                    </p>
                </div>

                {/* Median PPSF */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median Price per Square Foot
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        The median sale price divided by the home’s square footage.
                    </p>
                </div>

                {/* Median PPSF MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median Price per Sq Ft (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How this value has changed since last month.
                    </p>
                </div>

                {/* Median PPSF YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median Price per Sq Ft (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How this value has changed since last year.
                    </p>
                </div>

                {/* Median List PPSF */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median List Price per Square Foot
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        The midpoint of list prices per square foot for homes currently on the market.
                    </p>
                </div>

                {/* Median List PPSF MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median List Price per Sq Ft (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Month-over-month change in list price per square foot.
                    </p>
                </div>

                {/* Median List PPSF YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median List Price per Sq Ft (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Year-over-year change in list price per square foot.
                    </p>
                </div>

                {/* Homes Sold */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Homes Sold
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Total number of homes successfully sold during the period.
                    </p>
                </div>

                {/* Homes Sold MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Homes Sold (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Change in the number of homes sold compared to last month.
                    </p>
                </div>

                {/* Homes Sold YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Homes Sold (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Change in the number of homes sold compared to last year.
                    </p>
                </div>

                {/* Pending Sales */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Pending Sales
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Homes that are under contract but haven’t closed yet — a leading indicator of demand.
                    </p>
                </div>

                {/* Pending Sales MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Pending Sales (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Month-over-month change in pending sales.
                    </p>
                </div>

                {/* Pending Sales YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Pending Sales (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Year-over-year change in pending sales.
                    </p>
                </div>

                {/* New Listings */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        New Listings
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        The number of homes newly listed for sale during the period.
                    </p>
                </div>

                {/* New Listings MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        New Listings (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Change in new listings compared to the previous month.
                    </p>
                </div>

                {/* New Listings YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        New Listings (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Change in new listings compared to the previous year.
                    </p>
                </div>

                {/* Inventory */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Inventory (Active Listings)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How many homes are currently listed for sale — a measure of supply.
                    </p>
                </div>

                {/* Inventory MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Inventory (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How inventory has changed since last month.
                    </p>
                </div>

                {/* Inventory YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Inventory (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How inventory has changed since last year.
                    </p>
                </div>

                {/* Months of Supply */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Months of Supply
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How long it would take to sell all current inventory at the current pace — a key indicator of market balance.
                    </p>
                </div>

                {/* Months of Supply MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Months of Supply (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Month-over-month change in months of supply.
                    </p>
                </div>

                {/* Months of Supply YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Months of Supply (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Year-over-year change in months of supply.
                    </p>
                </div>

                {/* Median DOM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median Days on Market
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        The median number of days homes spend on the market before going under contract.
                    </p>
                </div>

                {/* Median DOM MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median Days on Market (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How days-on-market changed since the previous month.
                    </p>
                </div>

                {/* Median DOM YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Median Days on Market (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        How days-on-market changed compared to last year.
                    </p>
                </div>

                {/* Sale-to-List Ratio */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Sale-to-List Price Ratio
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        The average ratio of a home’s final sale price to its list price — a signal of how competitive the market is.
                    </p>
                </div>

                {/* Sale-to-List Ratio MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Sale-to-List Ratio (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Month-over-month change in the sale-to-list ratio.
                    </p>
                </div>

                {/* Sale-to-List Ratio YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Sale-to-List Ratio (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Year-over-year change in the sale-to-list ratio.
                    </p>
                </div>

                {/* Sold Above List */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Homes Sold Above List Price
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        The share of homes that sold for more than their list price — often a sign of bidding competition.
                    </p>
                </div>

                {/* Sold Above List MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Sold Above List (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Change in the share of homes sold above list since last month.
                    </p>
                </div>

                {/* Sold Above List YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Sold Above List (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Change in the share of homes sold above list since last year.
                    </p>
                </div>

                {/* Price Drops */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Price Drops
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Percentage of active listings that had a price reduction — an indicator of softening demand or overpricing.
                    </p>
                </div>

                {/* Price Drops MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Price Drops (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Month-over-month change in the share of listings with a price drop.
                    </p>
                </div>

                {/* Price Drops YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Price Drops (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Year-over-year change in the share of listings with a price drop.
                    </p>
                </div>

                {/* Off Market in Two Weeks */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Off Market in Two Weeks
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        The share of homes that are removed from the market within two weeks — often because they sell quickly or are withdrawn.
                    </p>
                </div>

                {/* Off Market in Two Weeks MoM */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Off Market in Two Weeks (Month-over-Month Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Month-over-month change in the share of homes taken off the market within two weeks.
                    </p>
                </div>

                {/* Off Market in Two Weeks YoY */}
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                    <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                        Off Market in Two Weeks (Year-over-Year Change)
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        Year-over-year change in the share of homes taken off the market within two weeks.
                    </p>
                </div>

            </div>



        </div>

        <StaticFooter />
      </>
    );
  },
);

HelpAndFAQ.displayName = 'HelpAndFAQ';

export default HelpAndFAQ;
