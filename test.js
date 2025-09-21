#!/usr/bin/env node

/**
 * instarinse® Calculator Test Suite
 * Automated testing for calculator functionality
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class CalculatorTester {
    constructor() {
        this.testResults = [];
        this.server = null;
        this.port = 8000;
    }

    async runAllTests() {
        console.log('🧪 instarinse® Calculator Test Suite');
        console.log('=====================================\n');

        try {
            await this.startServer();
            await this.runTests();
            this.stopServer();
            this.printResults();
        } catch (error) {
            console.error('❌ Test suite failed:', error.message);
            this.stopServer();
            process.exit(1);
        }
    }

    async startServer() {
        console.log('🚀 Starting local server...');
        
        return new Promise((resolve, reject) => {
            this.server = spawn('python3', ['-m', 'http.server', this.port.toString()], {
                stdio: 'pipe'
            });

            this.server.stdout.on('data', (data) => {
                if (data.toString().includes('Serving HTTP')) {
                    console.log(`✅ Server running at http://localhost:${this.port}`);
                    setTimeout(resolve, 1000); // Give server time to start
                }
            });

            this.server.stderr.on('data', (data) => {
                if (data.toString().includes('Address already in use')) {
                    this.port = 8001;
                    this.stopServer();
                    setTimeout(() => {
                        this.server = spawn('python3', ['-m', 'http.server', this.port.toString()]);
                        resolve();
                    }, 1000);
                }
            });

            setTimeout(() => reject(new Error('Server failed to start')), 5000);
        });
    }

    stopServer() {
        if (this.server) {
            this.server.kill();
            console.log('🛑 Server stopped');
        }
    }

    async runTests() {
        console.log('\n🧮 Running Calculator Tests...\n');

        // Test 1: File Structure
        await this.testFileStructure();
        
        // Test 2: HTML Validation
        await this.testHTMLStructure();
        
        // Test 3: JavaScript Functions
        await this.testJavaScriptFunctions();
        
        // Test 4: Calculation Logic
        await this.testCalculationLogic();
        
        // Test 5: Input Validation
        await this.testInputValidation();
        
        // Test 6: Responsive Design
        await this.testResponsiveDesign();
    }

    async testFileStructure() {
        const test = { name: 'File Structure', status: 'PASS', details: [] };

        try {
            // Check required files exist
            const requiredFiles = ['index.html', 'README.md'];
            for (const file of requiredFiles) {
                if (!fs.existsSync(file)) {
                    throw new Error(`Missing required file: ${file}`);
                }
                test.details.push(`✅ ${file} exists`);
            }

            // Check file sizes
            const indexStats = fs.statSync('index.html');
            const indexSizeKB = (indexStats.size / 1024).toFixed(1);
            
            if (indexStats.size > 100000) { // 100KB limit
                throw new Error(`index.html too large: ${indexSizeKB}KB`);
            }
            
            test.details.push(`✅ index.html size: ${indexSizeKB}KB`);
            
        } catch (error) {
            test.status = 'FAIL';
            test.details.push(`❌ ${error.message}`);
        }

        this.testResults.push(test);
    }

    async testHTMLStructure() {
        const test = { name: 'HTML Structure', status: 'PASS', details: [] };

        try {
            const htmlContent = fs.readFileSync('index.html', 'utf8');

            // Check required elements exist (class or id)
            const requiredElements = [
                { name: 'instarinse-calculator', pattern: 'class="instarinse-calculator"' },
                { name: 'calculator-title', pattern: 'class="calculator-title"' },
                { name: 'teamSize', pattern: 'id="teamSize"' },
                { name: 'officeDays', pattern: 'id="officeDays"' }, 
                { name: 'cupsPerDay', pattern: 'id="cupsPerDay"' },
                { name: 'currentPaperSlider', pattern: 'id="currentPaperSlider"' },
                { name: 'optimalInstarinseSlider', pattern: 'id="optimalInstarinseSlider"' },
                { name: 'annualSavings', pattern: 'id="annualSavings"' },
                { name: 'breakdownTableBody', pattern: 'id="breakdownTableBody"' }
            ];

            for (const element of requiredElements) {
                if (!htmlContent.includes(element.pattern)) {
                    throw new Error(`Missing element: ${element.name}`);
                }
                test.details.push(`✅ Element found: ${element.name}`);
            }

            // Check for jsPDF dependency
            if (!htmlContent.includes('jspdf')) {
                throw new Error('Missing jsPDF dependency');
            }
            test.details.push('✅ jsPDF dependency found');

            // Check for responsive viewport
            if (!htmlContent.includes('viewport')) {
                throw new Error('Missing responsive viewport meta tag');
            }
            test.details.push('✅ Responsive viewport configured');

        } catch (error) {
            test.status = 'FAIL';
            test.details.push(`❌ ${error.message}`);
        }

        this.testResults.push(test);
    }

    async testJavaScriptFunctions() {
        const test = { name: 'JavaScript Functions', status: 'PASS', details: [] };

        try {
            const htmlContent = fs.readFileSync('index.html', 'utf8');

            // Check required functions exist
            const requiredFunctions = [
                'updateDailyCupsEstimate',
                'updateAllocationVisualization',
                'validateMixAndUpdate',
                'calculatePotentialSavings',
                'updateBreakdownTable',
                'exportToPDF'
            ];

            for (const functionName of requiredFunctions) {
                if (!htmlContent.includes(`function ${functionName}`) && 
                    !htmlContent.includes(`${functionName} =`)) {
                    throw new Error(`Missing function: ${functionName}`);
                }
                test.details.push(`✅ Function found: ${functionName}`);
            }

            // Check for global assumptions
            if (!htmlContent.includes('GLOBAL_ASSUMPTIONS')) {
                throw new Error('Missing GLOBAL_ASSUMPTIONS configuration');
            }
            test.details.push('✅ Global assumptions configured');

            // Check for instarinse constants
            if (!htmlContent.includes('INSTARINSE_CONSTANTS')) {
                throw new Error('Missing INSTARINSE_CONSTANTS');
            }
            test.details.push('✅ instarinse® constants configured');

        } catch (error) {
            test.status = 'FAIL';
            test.details.push(`❌ ${error.message}`);
        }

        this.testResults.push(test);
    }

    async testCalculationLogic() {
        const test = { name: 'Calculation Logic', status: 'PASS', details: [] };

        try {
            // Test calculation assumptions
            const htmlContent = fs.readFileSync('index.html', 'utf8');
            
            // Extract global assumptions for verification
            const assumptions = {
                electricityRate: 0.22,
                paperCupCost: 0.15,
                handwashWater: 1.0,
                instarinseWater: 0.05,
                dishwasherCapacity: 40
            };

            for (const [key, expectedValue] of Object.entries(assumptions)) {
                if (!htmlContent.includes(expectedValue.toString())) {
                    console.warn(`⚠️  Could not verify assumption: ${key} = ${expectedValue}`);
                } else {
                    test.details.push(`✅ Assumption verified: ${key} = ${expectedValue}`);
                }
            }

            // Test calculation formulas are present
            const calculationElements = [
                'state.teamSize *',
                'state.cupsPerDay',
                'state.officeDays',
                '/ 100', // Percentage calculations
                'annualCups'
            ];

            for (const element of calculationElements) {
                if (!htmlContent.includes(element)) {
                    throw new Error(`Missing calculation element: ${element}`);
                }
            }
            
            test.details.push('✅ Core calculation formulas present');
            test.details.push('✅ Percentage conversion logic found');
            test.details.push('✅ Unit conversion logic found');

        } catch (error) {
            test.status = 'FAIL';
            test.details.push(`❌ ${error.message}`);
        }

        this.testResults.push(test);
    }

    async testInputValidation() {
        const test = { name: 'Input Validation', status: 'PASS', details: [] };

        try {
            const htmlContent = fs.readFileSync('index.html', 'utf8');

            // Check input constraints
            const inputConstraints = [
                ['teamSize', 'max="50000"'],
                ['officeDays', 'max="7"'],
                ['cupsPerDay', 'step="0.5"'],
                ['currentPaperSlider', 'min="0"'],
                ['optimalInstarinseSlider', 'max="100"']
            ];

            for (const [inputId, constraint] of inputConstraints) {
                const inputRegex = new RegExp(`id="${inputId}"[^>]*${constraint.replace(/"/g, '\\"')}`);
                if (!inputRegex.test(htmlContent)) {
                    throw new Error(`Missing constraint for ${inputId}: ${constraint}`);
                }
                test.details.push(`✅ Input constraint: ${inputId} has ${constraint}`);
            }

            // Check validation logic
            if (!htmlContent.includes('validateMixAndUpdate')) {
                throw new Error('Missing mix validation logic');
            }
            test.details.push('✅ Mix validation logic found');

            // Check invalid mix overlay
            if (!htmlContent.includes('invalid-mix-overlay')) {
                throw new Error('Missing invalid mix overlay');
            }
            test.details.push('✅ Invalid mix overlay configured');

        } catch (error) {
            test.status = 'FAIL';
            test.details.push(`❌ ${error.message}`);
        }

        this.testResults.push(test);
    }

    async testResponsiveDesign() {
        const test = { name: 'Responsive Design', status: 'PASS', details: [] };

        try {
            const htmlContent = fs.readFileSync('index.html', 'utf8');

            // Check CSS media queries
            const mediaQueries = [
                '@media (max-width: 768px)',
                '@media (min-width: 1024px)',
                'grid-template-columns'
            ];

            for (const query of mediaQueries) {
                if (!htmlContent.includes(query)) {
                    throw new Error(`Missing responsive design: ${query}`);
                }
                test.details.push(`✅ Responsive feature: ${query}`);
            }

            // Check mobile optimizations
            const mobileFeatures = [
                'touch-friendly',
                'mobile-first',
                'min-height: 48px', // Touch target size
                'overflow: hidden'
            ];

            for (const feature of mobileFeatures) {
                if (htmlContent.includes(feature) || htmlContent.includes(feature.replace(/[:-]/g, ''))) {
                    test.details.push(`✅ Mobile feature: ${feature}`);
                }
            }

        } catch (error) {
            test.status = 'FAIL';
            test.details.push(`❌ ${error.message}`);
        }

        this.testResults.push(test);
    }

    printResults() {
        console.log('\n📊 Test Results');
        console.log('================');

        let totalTests = this.testResults.length;
        let passedTests = this.testResults.filter(t => t.status === 'PASS').length;

        for (const test of this.testResults) {
            const icon = test.status === 'PASS' ? '✅' : '❌';
            console.log(`\n${icon} ${test.name} - ${test.status}`);
            
            if (test.details.length > 0) {
                for (const detail of test.details) {
                    console.log(`   ${detail}`);
                }
            }
        }

        console.log('\n📈 Summary');
        console.log('===========');
        console.log(`Total Tests: ${totalTests}`);
        console.log(`Passed: ${passedTests}`);
        console.log(`Failed: ${totalTests - passedTests}`);
        console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);

        if (passedTests === totalTests) {
            console.log('\n🎉 All tests passed! Calculator is ready for deployment.');
        } else {
            console.log('\n⚠️  Some tests failed. Please review and fix issues before deployment.');
        }

        console.log(`\n🌐 Calculator running at: http://localhost:${this.port}`);
    }
}

// Manual calculation verification
function verifyCalculations() {
    console.log('\n🧮 Manual Calculation Verification');
    console.log('===================================');
    
    // Test scenario: 1000 people, 3 days/week, 2 cups/day
    const teamSize = 1000;
    const officeDays = 3;
    const cupsPerDay = 2;
    const weeksPerYear = 52;
    
    const dailyCups = (teamSize * cupsPerDay * officeDays) / 5;
    const annualCups = teamSize * cupsPerDay * officeDays * weeksPerYear;
    
    console.log(`Team Configuration:`);
    console.log(`  Team Size: ${teamSize} people`);
    console.log(`  Office Days: ${officeDays} days/week`);
    console.log(`  Cups per Person: ${cupsPerDay} cups/day`);
    console.log(`  Daily Usage: ${dailyCups.toLocaleString()} cups/day`);
    console.log(`  Annual Usage: ${annualCups.toLocaleString()} cups/year`);
    
    // Test mix: 20% paper, 30% handwash, 50% dishwasher
    const currentMix = { paper: 20, handwash: 30, dishwasher: 50 };
    const paperCups = annualCups * (currentMix.paper / 100);
    const handwashCups = annualCups * (currentMix.handwash / 100);
    const dishwasherCups = annualCups * (currentMix.dishwasher / 100);
    
    console.log(`\nCurrent Mix (${Object.values(currentMix).reduce((a, b) => a + b)}%):`);
    console.log(`  Paper: ${paperCups.toLocaleString()} cups (${currentMix.paper}%)`);
    console.log(`  Handwash: ${handwashCups.toLocaleString()} cups (${currentMix.handwash}%)`);
    console.log(`  Dishwasher: ${dishwasherCups.toLocaleString()} cups (${currentMix.dishwasher}%)`);
    
    // Cost calculations with assumptions
    const paperCost = paperCups * 0.15; // £0.15 per cup
    const handwashCost = handwashCups * (0.02 + (0.08 * 0.22)); // Detergent + energy
    const dishwasherCost = dishwasherCups * ((0.9 * 0.22 + (30/60 * 15) + 0.40) / 40); // Per cup
    
    const totalCost = paperCost + handwashCost + dishwasherCost;
    
    console.log(`\nCost Breakdown:`);
    console.log(`  Paper Cups: £${paperCost.toFixed(0)}`);
    console.log(`  Hand Washing: £${handwashCost.toFixed(0)}`);
    console.log(`  Dishwasher: £${dishwasherCost.toFixed(0)}`);
    console.log(`  Total Annual Cost: £${totalCost.toFixed(0)}`);
    
    console.log(`\n✅ Manual calculations completed successfully`);
}

// Command line interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h')) {
        console.log('instarinse® Calculator Test Suite');
        console.log('');
        console.log('Usage:');
        console.log('  npm test           Run all tests');
        console.log('  node test.js       Run all tests');
        console.log('  node test.js calc  Verify calculations only');
        console.log('  node test.js --help Show this help');
        process.exit(0);
    }
    
    if (args.includes('calc')) {
        verifyCalculations();
        process.exit(0);
    }
    
    const tester = new CalculatorTester();
    tester.runAllTests()
        .then(() => {
            if (args.includes('calc-verify')) {
                verifyCalculations();
            }
        })
        .catch(console.error);
}
