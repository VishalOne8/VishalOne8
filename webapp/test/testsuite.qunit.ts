import type {SuiteConfiguration} from "sap/ui/test/starter/config";
export default {
	name: "QUnit test suite for the UI5 Application: com.dewa.consultantlisting",
	defaults: {
		page: "ui5://test-resources/com/dewa/consultantlisting/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: ["com/dewa/consultantlisting/"],
			never: ["test-resources/com/dewa/consultantlisting/"]
		},
		loader: {
			paths: {
				"com/dewa/consultantlisting": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for com.dewa.consultantlisting"
		},
		"integration/opaTests": {
			title: "Integration tests for com.dewa.consultantlisting"
		}
	}
} satisfies SuiteConfiguration;
