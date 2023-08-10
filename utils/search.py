'''
Provides helper functions for the search functionalities
'''

import pickle 

def find_queries(query):
    '''
    Searches pickled_taxid for the organism name.
    '''
    with open('data/pickled_taxid', 'rb') as taxid:
        data = pickle.load(taxid)
        result = data.get(query.lower(), None)
        if not result:
            return ''
        return {'taxid' : result[0], 'rna' : result[1], 'ill' : result[2]}

def find_entity_information(query):
    '''
    Returns information about a chosen entity in a tree.  Until more 
    information is provided, this function will just return the same information.
    '''
    return {'info1' : 'Test 1', 'info2' : 'Test 2', 'info3' : 'Test 3'}
